import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { BASE_URL } = process.env;

  cookies().delete("access_token");
  cookies().delete("refresh_token");

  return NextResponse.redirect(new URL("/", BASE_URL));
}
