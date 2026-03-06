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
      if (!input) {
        toast.error("please type something");
        return;
      }
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
        <Copy color={copied ? "#4D5564" : "#4D5562"} size={16} />
      </Button>
    </div>
  );
}

export default CopyClip;
