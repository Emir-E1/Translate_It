import { useEffect, useState } from "react";
import { useTranslator } from "../context/TranslatorContext";

function CopyClip({ text }) {
  const [copied, setCopied] = useState(false);
  const { input, translation } = useTranslator();
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setCopied(false);
  }, [input, translation]);

  return (
    <div>
      <button
        className="rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-600/25 transition-all duration-200 hover:bg-cyan-500 hover:shadow-cyan-500/30 active:scale-[0.98]"
        onClick={handleCopy}
      >
        {copied ? "Copied !" : "Copy Your Text !"}
      </button>
    </div>
  );
}

export default CopyClip;
