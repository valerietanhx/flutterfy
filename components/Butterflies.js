import { useState, useEffect } from "react";
import P5jsContainer from "@/components/P5jsContainer";
import sketch from "@/components/Sketch";

export default function Butterflies(props) {
  const access_token = props.access_token;
  const options = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  // messy, to abstract out:
  // https://react.dev/learn/reusing-logic-with-custom-hooks
  const [topSongs, setTopSongs] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetch("https://api.spotify.com/v1/me/top/tracks", options)
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
          setTopSongs(json["items"]);
        }
      });
    return () => {
      ignore = true;
    };
  }, []);

  const [audioFeatures, setAudioFeatures] = useState(null);

  useEffect(() => {
    if (topSongs) {
      let ignore = false;
      const ids = Object.keys(topSongs)
        .map((d) => topSongs[d]["id"])
        .join();

      fetch(`https://api.spotify.com/v1/audio-features?ids=${ids}`, options)
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
            setAudioFeatures(json["audio_features"]);
          }
        });
      return () => {
        ignore = true;
      };
    }
  }, [topSongs]);

  return (
    <>
      {audioFeatures ? (
        <P5jsContainer sketch={sketch} data={audioFeatures} />
      ) : (
        <></>
      )}
    </>
  );
}
