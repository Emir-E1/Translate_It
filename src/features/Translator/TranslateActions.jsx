import { useTranslator } from "../../context/TranslatorContext";

function TranslateActions({ input }) {
  const { handleTranslate } = useTranslator();
  return (
    <div>
      <button
        className="cursor-pointer rounded-full bg-[#263FA9] px-3 py-2 font-mono font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
        onClick={() => handleTranslate(input)}
      >
        Translate it
      </button>
    </div>
  );
}

export default TranslateActions;
