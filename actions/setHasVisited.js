"use server";

import { cookies } from "next/headers";

export async function setHasVisited() {
  cookies().set("has_visited", true);
}
