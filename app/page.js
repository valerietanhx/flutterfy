import { cookies } from "next/headers";
import Butterflies from "@/components/Butterflies/Butterflies";
import Login from "@/components/Login/Login";

export default function Home() {
  const accessToken = cookies().get("access_token")
    ? cookies().get("access_token").value
    : null;

  return (
    <>{accessToken ? <Butterflies access_token={accessToken} /> : <Login />}</>
  );
}
