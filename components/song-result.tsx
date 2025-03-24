import { SpotifyPlayer } from "./spotify";

interface SongResultProps {
  randomSongId: string;
}

export function SongResult({ randomSongId }: SongResultProps) {
  return (
    <div className="space-y-10">
      {randomSongId && <SpotifyPlayer spotifyId={randomSongId} />}
    </div>
  );
}
