import Button from "../ui/Button";
import { Volume2 } from "lucide-react";
import { useState } from "react";

function Transcript({ input }) {
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    if (!input) return;
    setIsPlaying(true);
    // placeholder for TTS integration
    setTimeout(() => setIsPlaying(false), 600);
  }

  return (
    <div>
      <Button onClick={handlePlay} disabled={!input || isPlaying}>
        <Volume2 color={isPlaying ? "#22c55e" : "#4D5562"} size={16} />
      </Button>
    </div>
  );
}

export default Transcript;
