import { useState } from "react";
import TranslationPanel from "../features/Translator/TranslationPanel";
function AppTranslator() {
  return (
    <div className="min-h-screen w-full bg-[url('/29188.jpg')] bg-cover bg-center flex flex-col items-center py-8">
      <h1 className="text-white text-2xl font-bold mb-8">translate here</h1>
      <div className="flex gap-8">
        <TranslationPanel type={"source"} />
        <TranslationPanel type={"target"} />
      </div>
    </div>
  );
}

export default AppTranslator;
