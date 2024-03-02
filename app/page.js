"use client";

import querystring from "querystring";
import useHash from "@/utils/useHash";
import Butterflies from "@/components/Butterflies";
import Login from "@/components/Login/Login";

export default function Home() {
  const hash = useHash();
  const access_token = querystring.parse(hash)["access_token"];
  // const refresh_token = querystring.parse(hash)["refresh_token"]

  return (
    <main>
      {hash ? <Butterflies access_token={access_token} /> : <Login />}
    </main>
  );
}
