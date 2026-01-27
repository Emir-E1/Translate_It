import { useTranslator } from "../../context/TranslatorContext";

function SwitchButton() {
  const { handleSwitch } = useTranslator();
  return (
    <div>
      <button
        className="rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-600/25 transition-all duration-200 hover:bg-cyan-500 hover:shadow-cyan-500/30 active:scale-[0.98]"
        onClick={handleSwitch}
      >
        Switch
      </button>
    </div>
  );
}

export default SwitchButton;
