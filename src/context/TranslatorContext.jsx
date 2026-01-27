import { createContext, useContext, useEffect, useState } from "react";
import getTranslation from "../services/handleTranslation";

const TranslatorContext = createContext();

function TranslateProvider({ children }) {
  const [input, setInput] = useState("Hello");
  const [translation, setTranslation] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState({
    name: "english",
    code: "en",
  });
  const [targetLanguage, setTargetLanguage] = useState({
    name: "french",
    code: "fr",
  });
  const [isSwitching, setIsSwitching] = useState(false);

  const pairsLanguages = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "ru", name: "Russian" },
    { code: "it", name: "Italian" },
  ];

  useEffect(() => {
    if (!input || !currentLanguage?.code || !targetLanguage?.code) {
      return;
    }

    async function translate() {
      const result = await getTranslation(
        input,
        currentLanguage,
        targetLanguage,
      );
      setTranslation(result);
    }

    translate();
  }, [input, currentLanguage?.code, targetLanguage?.code]);

  function handleSwitch() {
    setIsSwitching(true);
    setInput(translation);
    setTranslation(input);
    setCurrentLanguage({ ...targetLanguage });
    setTargetLanguage({ ...currentLanguage });
    setTimeout(() => {
      setIsSwitching(false);
    }, 0);
  }

  return (
    <TranslatorContext.Provider
      value={{
        input,
        setInput,
        translation,
        currentLanguage,
        targetLanguage,
        setCurrentLanguage,
        setTargetLanguage,
        handleSwitch,
        pairsLanguages,
      }}
    >
      {children}
    </TranslatorContext.Provider>
  );
}

export function useTranslator() {
  return useContext(TranslatorContext);
}

export default TranslateProvider;
