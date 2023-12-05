import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import querystring from "querystring";

function generateRandomStateString(length) {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export async function GET() {
  const { CLIENT_ID, REDIRECT_URI } = process.env;
  const stateKey = "spotify_auth_state";
  const state = generateRandomStateString(16);
  const scopes = ["user-top-read"];

  cookies().set(stateKey, state);

  return NextResponse.redirect(
    new URL(
      "https://accounts.spotify.com/authorize?" +
        querystring.stringify({
          response_type: "code",
          client_id: CLIENT_ID,
          scope: scopes.join(" "),
          redirect_uri: REDIRECT_URI,
          state: state,
        })
    )
  );
}
