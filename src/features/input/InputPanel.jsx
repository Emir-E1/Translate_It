import { useTranslator } from "../../context/TranslatorContext";
import Panel from "../../ui/Panel";
import LanguageSelector from "../Translator/LanguageSelector";

const MAX_LENGTH = 500;

function InputPanel() {
  const { input, setInput, setCurrentLanguage } = useTranslator();

  const handleInput = (input) => {
    setInput(input);
  };
  return (
    <Panel>
      <LanguageSelector resolveLanguages={setCurrentLanguage} role="source" />
      <div className="relative flex-1">
        <textarea
          className="h-32 min-h-[7.5rem] w-full resize-none rounded-xl border border-white/5 bg-white/5 p-4 pb-9 pr-20 text-white placeholder-gray-500 outline-none transition placeholder:transition focus:border-cyan-500/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-500/20"
          placeholder="Type your word here …"
          value={input}
          onChange={(e) => handleInput(e.target.value)}
          maxLength={MAX_LENGTH}
        />
        <div
          className="pointer-events-none absolute bottom-3 right-3 flex items-center"
          aria-hidden
        >
          <span className="rounded bg-gray-900/80 px-2 py-0.5 text-[11px] font-medium tabular-nums text-gray-400">
            {input.length}/{MAX_LENGTH}
          </span>
        </div>
      </div>
    </Panel>
  );
}

export default InputPanel;
