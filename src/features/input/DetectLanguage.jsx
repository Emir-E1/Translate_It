import { useTranslator } from "../../context/TranslatorContext";

function DetectLanguage({ input }) {
  const { handleDetect } = useTranslator();

  return (
    <button
      onClick={() => handleDetect(input)}
      className="rounded-md bg-white/10 px-3 py-1 text-sm text-white hover:bg-white/20"
    >
      Detect Language
    </button>
  );
}

export default DetectLanguage;
