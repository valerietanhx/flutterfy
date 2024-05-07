import { useState, useEffect } from "react";
import { refreshAccessToken } from "@/actions/refreshAccessToken";

export default function useSpotifyApi(url, options, key, dependencies) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (url) {
      fetch(url, options)
        .then(async (response) => {
          if (response.status == 401) {
            const accessToken = await refreshAccessToken();

            const newOptions = {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            };

            return fetch(url, newOptions);
          }
          return response;
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error("An error occurred during fetching.");
          }
          return response;
        })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setData(json[key]);
        });
    }
  }, dependencies);

  return data;
}
