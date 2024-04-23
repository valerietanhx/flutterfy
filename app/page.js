import { cookies } from "next/headers";
import Butterflies from "@/components/Butterflies/Butterflies";
import Login from "@/components/Login/Login";

export default function Home() {
  const access_token = cookies().get("access_token")
    ? cookies().get("access_token").value
    : null;

  return (
    <>
      {access_token ? <Butterflies access_token={access_token} /> : <Login />}
    </>
  );
}
