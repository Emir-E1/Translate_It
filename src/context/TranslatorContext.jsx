import { createContext, useContext, useEffect, useState } from "react";
import getTranslation from "../services/handleTranslation";

const TranslatorContext = createContext();

function TranslateProvider({ children }) {
  const [input, setInput] = useState("Hello");
  const [translation, setTranslation] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("fr");
  const [isSwitching, setIsSwitching] = useState(false);

  const pairsLanguages = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "ru", name: "Russian" },
    { code: "it", name: "Italian" },
  ];

  useEffect(() => {
    if (isSwitching) return;

    if (!input || input === "") {
      setTranslation("");
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
  }, [input, currentLanguage, targetLanguage]);

  function handleSwitch() {
    setIsSwitching(true);
    setInput(translation);
    setTranslation(input);
    setCurrentLanguage(targetLanguage);
    setTargetLanguage(currentLanguage);
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
