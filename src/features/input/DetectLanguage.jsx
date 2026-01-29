import { useTranslator } from "../../context/TranslatorContext";

function DetectLanguage({ input }) {
  const { handleDetect } = useTranslator();

  return (
    <button
      onClick={() => handleDetect(input)}
      type="button"
      className="shrink-0 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
    >
      Detect Language
    </button>
  );
}

export default DetectLanguage;
