import { NextResponse } from "next/server";

export async function GET(req) {
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-client-with-route-handlers
  // https://www.reddit.com/r/nextjs/comments/16oh5y7/passing_data_from_server_component_to_client/

  const { searchParams } = new URL(req.url);
  const access_token = searchParams.get("access_token");

  try {
    const res = await fetch("https://api.spotify.com/v1/me/top/tracks", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    // figure out error handling
    console.error("An error occurred during fetching.");
  }
}
