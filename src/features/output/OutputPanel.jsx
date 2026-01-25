import { useTranslator } from "../../context/TranslatorContext";
import Panel from "../../ui/Panel";
import LanguageSelector from "../Translator/LanguageSelector";

function OutputPanel() {
  const { translation, setTargetLanguage } = useTranslator();
  const isEmpty = translation == null || translation === "";

  return (
    <Panel>
      <LanguageSelector role="target" resolveLanguages={setTargetLanguage} />
      <div
        className={`min-h-[7.5rem] flex-1 rounded-xl border p-4 ${
          isEmpty
            ? "border-dashed border-white/10 bg-white/[0.03] text-gray-500"
            : "border-white/5 bg-white/5 text-white"
        }`}
      >
        {translation ?? "Translation…"}
      </div>
    </Panel>
  );
}

export default OutputPanel;
