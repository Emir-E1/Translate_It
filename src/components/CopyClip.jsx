import { useEffect, useState } from "react";
import { useTranslator } from "../context/TranslatorContext";
import { Copy } from "lucide-react";
import Button from "../ui/Button";

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
      <Button onClick={handleCopy}>
        {copied ? (
          <Copy color="#4D5562" size={16} />
        ) : (
          <Copy color="#4D5562" size={16} />
        )}
      </Button>
    </div>
  );
}

export default CopyClip;
