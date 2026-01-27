import CopyClip from "../../components/CopyClip";
import { useTranslator } from "../../context/TranslatorContext";
import SwitchButton from "../output/SwitchButton";

function TranslateActions({ text }) {
  const { handleTranslate } = useTranslator();
  return (
    <>
      <SwitchButton />
      <CopyClip text={text} />
    </>
    /*
    <div className="pt-1">
      {input && (
        <button
          type="button"
          className="rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-600/25 transition-all duration-200 hover:bg-cyan-500 hover:shadow-cyan-500/30 active:scale-[0.98]"
          onClick={handleTranslate}
        >
          Translate it
        </button>
      )}
    </div>*/
  );
}

export default TranslateActions;
