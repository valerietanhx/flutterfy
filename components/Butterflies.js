import useSpotifyAPI from "@/utils/useSpotifyAPI";
import SketchContainer from "@/components/SketchContainer";
import Sketch from "@/components/Sketch";

export default function Butterflies(props) {
  const access_token = props.access_token;
  const options = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  const topSongs = useSpotifyAPI(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term",
    options,
    "items",
    []
  );
  const audioFeatures = useSpotifyAPI(
    topSongs
      ? `https://api.spotify.com/v1/audio-features?ids=${Object.keys(topSongs)
          .map((d) => topSongs[d]["id"])
          .join()}`
      : "",
    options,
    "audio_features",
    [topSongs]
  );

  return (
    <>
      {audioFeatures ? (
        <SketchContainer sketch={Sketch} data={audioFeatures} />
      ) : (
        <></>
      )}
    </>
  );
}
