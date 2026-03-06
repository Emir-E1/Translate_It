import Button from "../ui/Button";
import { Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

function Transcript({ text }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const utteranceRef = useRef(null);

  const canUseSpeech =
    typeof window !== "undefined" &&
    "speechSynthesis" in window &&
    "SpeechSynthesisUtterance" in window;

  useEffect(() => {
    return () => {
      if (canUseSpeech) {
        window.speechSynthesis.cancel();
      }
    };
  }, [canUseSpeech]);

  function handlePlay() {
    if (!text) return;

    if (!canUseSpeech) {
      toast.error("Speech synthesis is not supported in this browser.");
      return;
    }

    // If already playing, stop current speech.
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    const utterance = new window.SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      toast.error("Error while playing the speech.");
    };

    setIsPlaying(true);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div>
      <Button onClick={handlePlay} disabled={!text}>
        <Volume2 color={isPlaying ? "#22c55e" : "#4D5562"} size={16} />
      </Button>
    </div>
  );
}

export default Transcript;
