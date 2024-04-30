"use server";

import { cookies } from "next/headers";

export async function refreshAccessToken() {
  const { CLIENT_ID, CLIENT_SECRET } = process.env;

  const refreshToken = cookies().get("refresh_token")
    ? cookies().get("refresh_token").value
    : null;

  // TODO: add handling for if no refresh token

  const authOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        new Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  };

  const body = await fetch("https://accounts.spotify.com/api/token", authOptions);
  const response = await body.json();

  const newAccessToken = response.access_token;
  cookies().set("access_token", newAccessToken, { secure: true });

  return newAccessToken;
}
