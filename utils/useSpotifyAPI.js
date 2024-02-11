import { useState, useEffect } from "react";

export default function useSpotifyAPI(url, options, key, dependencies) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("An error occurred during fetching.");
        } else {
          return response;
        }
      })
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setData(json[key]);
        }
      });

    return () => {
      ignore = true;
    };
  }, dependencies);

  return data;
}
