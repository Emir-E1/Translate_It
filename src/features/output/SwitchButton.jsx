import { useTranslator } from "../../context/TranslatorContext";
import { ArrowLeftRight } from "lucide-react";
import Button from "../../ui/Button";
function SwitchButton() {
  const { handleSwitch } = useTranslator();
  return (
    <div>
      <Button onClick={handleSwitch}>
        <ArrowLeftRight color="#4D5562" strokeWidth={1.75} size={16} />
      </Button>
    </div>
  );
}

export default SwitchButton;
