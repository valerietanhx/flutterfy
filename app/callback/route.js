import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import querystring from "querystring";

export async function GET(req) {
  const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;
  const stateKey = "spotify_auth_state";
  const baseUrl = "http://localhost:3000";

  const code = req.nextUrl.searchParams.get("code") || null;
  const state = req.nextUrl.searchParams.get("state") || null;
  const storedState = req.cookies
    ? req.cookies.get("spotify_auth_state").value
    : null;

  if (state === null || state !== storedState) {
    // figure out error handling
    throw new Error("An error occurred during authorisation.");
    // return NextResponse.redirect(new URL("/#?error=state_mismatch", baseUrl));
  } else {
    cookies().delete(stateKey);
    const authOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
      },
      body: querystring.stringify({
        code: code,
        redirect_uri: REDIRECT_URI,
        grant_type: "authorization_code",
      }),
    };

    const res = await fetch(
      "https://accounts.spotify.com/api/token",
      authOptions
    );
    if (!res.ok) throw new Error("An error occurred during authorisation.");
    const data = await res.json();

    return NextResponse.redirect(
      new URL(
        "/#" +
          querystring.stringify({
            access_token: data.access_token,
            refresh_token: data.refresh_token,
          }),
        baseUrl
      )
    );
  }
}
