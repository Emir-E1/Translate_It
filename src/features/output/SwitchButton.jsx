import { useTranslator } from "../../context/TranslatorContext";

function SwitchButton() {
  const { handleSwitch } = useTranslator();
  return (
    <div>
      <button onClick={handleSwitch}>Switch</button>
    </div>
  );
}

export default SwitchButton;
