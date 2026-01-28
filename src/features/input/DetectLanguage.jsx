import { useTranslator } from "../../context/TranslatorContext";
import Button from "../../ui/Button";

function DetectLanguage({ input }) {
  const { handleDetect } = useTranslator();

  return (
    <button
      onClick={() => handleDetect(input)}
      className="w-full rounded-md p-2 text-xs text-white"
    >
      Detect Language
    </button>
  );
}

export default DetectLanguage;
