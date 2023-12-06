import { useState, useEffect } from "react";

export default function Butterflies(props) {
  const access_token = props.access_token;

  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;
    const options = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    fetch("https://api.spotify.com/v1/me/top/tracks", options)
      .then((response) => {
        if (!response.ok) {
            throw new Error("An error occurred during fetching.")
        } else {
            return response
        };
      })
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setData(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <h1>Authorised! I'm in Butterflies!</h1>
      {/* to be turned into butterfly viz*/}
      <p>{JSON.stringify(data)}</p>
    </>
  );
}
