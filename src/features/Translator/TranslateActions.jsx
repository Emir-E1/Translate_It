import CopyClip from "../../components/CopyClip";
import Transcript from "../../components/Transcript";
import { useTranslator } from "../../context/TranslatorContext";

function TranslateActions({ text }) {
  const { handleTranslate } = useTranslator();
  return (
    <div className="flex flex-row gap-4">
      <Transcript text={text} />

      <CopyClip text={text} />
    </div>
  );
}

export default TranslateActions;
