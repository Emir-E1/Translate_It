import { useEffect, useState } from "react";
import { useTranslator } from "../context/TranslatorContext";
import { Copy } from "lucide-react";
import Button from "../ui/Button";
import toast from "react-hot-toast";

function CopyClip({ text }) {
  const [copied, setCopied] = useState(false);
  const { input, translation } = useTranslator();
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Coppied !");
    } catch (error) {
      console.log(error);
      toast.error("Error !");
    }
  }
  useEffect(() => {
    setCopied(false);
  }, [input, translation]);

  return (
    <div>
      <Button onClick={handleCopy}>
        <Copy color={copied ? "#22c55e" : "#4D5562"} size={16} />
      </Button>
    </div>
  );
}

export default CopyClip;
