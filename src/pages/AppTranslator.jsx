import { useState } from "react";
import TranslationPanel from "../features/Translator/TranslationPanel";
function AppTranslator() {
  return (
    <div className="flex h-auto flex-col items-center bg-slate-500">
      <h1>translate here</h1>
      <TranslationPanel type={"source"} />
      <TranslationPanel type={"target"} />
    </div>
  );
}

export default AppTranslator;
