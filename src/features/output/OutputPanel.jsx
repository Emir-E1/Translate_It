import { useTranslator } from "../../context/TranslatorContext";
import Panel from "../../ui/Panel";

import LanguagesSelector from "../Translator/LanguagesSelector";
import TranslateActions from "../Translator/TranslateActions";
import SwitchButton from "./SwitchButton";

function OutputPanel() {
  const { translation, setTargetLanguage, targetLanguage, isTranslating } =
    useTranslator();
  const isEmpty = translation == null || translation === "";

  return (
    <Panel>
      <div className="flex flex-row justify-between border-b border-white/10 p-1">
        <LanguagesSelector
          resolveLanguages={setTargetLanguage}
          managedLanguage={targetLanguage}
        />
        <SwitchButton />
      </div>
      <div className="relative min-h-[7.5rem] flex-1">
        <div
          className={`h-full w-full rounded-xl border p-4 ${
            isEmpty
              ? "border-dashed border-white/10 bg-white/[0.03] text-gray-500"
              : "border-white/5 bg-white/5 text-white"
          } ${isTranslating ? "opacity-60" : ""}`}
        >
          {translation ?? "Translation…"}
        </div>
        {isTranslating && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
          </div>
        )}
      </div>
      <TranslateActions text={translation} role={"target"} />
    </Panel>
  );
}

export default OutputPanel;
