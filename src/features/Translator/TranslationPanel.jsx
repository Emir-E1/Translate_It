import { useState } from "react";
import { useTranslator } from "../../context/TranslatorContext";
import TranslateActions from "./TranslateActions";
import Panel from "../../ui/Panel";
import LanguageSelector from "./LanguageSelector";

function TranslationPanel({ type }) {
  const { translation } = useTranslator();
  const [input, setInput] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("fr");

  return (
    <div className="my-2">
      {type === "source" ? (
        <div>
          <Panel>
            <LanguageSelector type={"source"} />
            <textarea
              className="h-32 w-full resize-none rounded-lg border-none bg-transparent p-4 text-white placeholder-gray-400 outline-none"
              placeholder="Tapez votre texte à traduire ici..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <TranslateActions input={input} />
          </Panel>
        </div>
      ) : (
        <div>
          <Panel>
            <LanguageSelector type={"target"} />
            <div className="h-32 w-full p-4 text-white">
              {translation || "La traduction apparaîtra ici..."}
            </div>
          </Panel>
        </div>
      )}
    </div>
  );
}

export default TranslationPanel;
