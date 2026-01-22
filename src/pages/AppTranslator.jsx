import { useState } from "react";
import TranslationPanel from "../features/Translator/TranslationPanel";
function AppTranslator() {
  return (
    <div className="flex h-96 flex-col items-center bg-slate-500">
      <h1>translate here</h1>
      <TranslationPanel />
    </div>
  );
}

export default AppTranslator;
