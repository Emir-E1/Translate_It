import { useState } from "react";

import getTranslation from "./../../services/handleTranslation";
function InputPanel() {
  const [input, setInput] = useState("");
  const [translation, setTranslation] = useState("");
  async function handleTranslate() {
    const result = await getTranslation(input, "en", "fr");
    console.log(result.translatedText);
    //setTranslation(result);
  }
  //https://mymemory.translated.net/doc/spec.php
  //  https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it
  //  https://api.mymemory.translated.net/get?q={INPUT}!&langpair={CURRENT}|{TARGET}
  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleTranslate}>Translate it</button>
      </div>
      <div>{translation}</div>
    </div>
  );
}

export default InputPanel;
