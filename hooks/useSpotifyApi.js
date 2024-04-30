import { useState, useEffect } from "react";
import { refreshAccessToken } from "@/actions/refreshAccessToken";

export default function useSpotifyApi(url, options, key, dependencies) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url, options)
      .then(async (response) => {
        if (response.status == 401) {
          const accessToken = await refreshAccessToken();

          const newOptions = {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          };

          fetch(url, newOptions)
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
        } else if (!response.ok) {
          throw new Error("An error occurred during fetching.");
        } else {
          return response;
        }
      })
      .then((response) => {
        if (response) {
          return response.json();
        }
      })
      .then((json) => {
        if (json) {
          setData(json[key]);
        }
      });
  }, dependencies);

  return data;
}
