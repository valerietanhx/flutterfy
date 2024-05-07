"use server";

import { cookies } from "next/headers";

export async function getHasVisited() {
  return cookies().get("has_visited") ? true : false;
}
