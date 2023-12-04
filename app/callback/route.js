import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  const stateKey = "spotify_auth_state";

  let code = req.nextUrl.searchParams.get("code") || null;
  let state = req.nextUrl.searchParams.get("state") || null;
  let storedState = req.cookies
    ? req.cookies.get("spotify_auth_state").value
    : null;

  if (state === null || state !== storedState) {
    // based on michelle liu's receiptify; are there other ways of handling errors?
    return NextResponse.redirect(
      new URL("/#?error=state_mismatch", "http://localhost:3000")
    );
  } else {
    cookies().delete(stateKey);
    // TBC
    // new URL("/#?access_token=${access_token}`, "http://localhost:3000")
    return NextResponse.redirect(new URL("http://localhost:3000"));
  }
}
