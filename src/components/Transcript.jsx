import Button from "../ui/Button";
import { Volume2 } from "lucide-react";
function Transcript({ input }) {
  return (
    <div>
      <Button>
        {" "}
        <Volume2 color="#4D5562" size={16} />{" "}
      </Button>
    </div>
  );
}

export default Transcript;
