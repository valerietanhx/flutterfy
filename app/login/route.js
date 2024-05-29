import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getBaseUrl } from "@/utils/getBaseUrl";

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
  const { CLIENT_ID } = process.env;

  const state = generateRandomStateString(16);
  const scopes = ["user-top-read"];

  cookies().set("spotify_auth_state", state);

  return NextResponse.redirect(
    new URL(
      "https://accounts.spotify.com/authorize?" +
        new URLSearchParams({
          response_type: "code",
          client_id: CLIENT_ID,
          scope: scopes.join(" "),
          redirect_uri: getBaseUrl() + "/callback",
          state: state,
        }).toString()
    )
  );
}
