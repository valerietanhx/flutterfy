import { useState, useEffect } from "react";

export default function useSpotifyApi(url, options, key, dependencies) {
  const [data, setData] = useState(null);

  useEffect(() => {
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
        setData(json[key]);
      });
  }, dependencies);

  return data;
}
