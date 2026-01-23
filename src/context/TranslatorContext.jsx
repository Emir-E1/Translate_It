import { createContext, useContext, useState } from "react";
import getTranslation from "../services/handleTranslation";

const TranslatorContext = createContext();

function TranslateProvider({ children }) {
  const [input, setInput] = useState("");
  const [translation, setTranslation] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("fr");
  const [myLanguages, setMyLanguages] = useState([]);
  async function handleTranslate(input) {
    if (!input) {
      setTranslation("");
    }
    setInput(input);
    const result = await getTranslation(input, currentLanguage, targetLanguage);
    console.log(result);
    setTranslation(result);
  }

  function handleMyLanguages(lng) {
    if (myLanguages.length <= 2) {
      setMyLanguages((prev) => (prev.includes(lng) ? prev : [...prev, lng]));
    } else {
      setMyLanguages((prev) =>
        prev.includes(lng)
          ? prev
          : [...prev.filter((_, index) => index !== 0), lng],
      );
    }
  }

  function handleLanguage(type, language) {
    if (type === "source") {
      setCurrentLanguage(language);
    }
    setTargetLanguage(language);
  }

  return (
    <TranslatorContext.Provider
      value={{
        input,
        translation,
        handleTranslate,
        handleLanguage,
        myLanguages,
        handleMyLanguages,
        setInput,
      }}
    >
      {children}
    </TranslatorContext.Provider>
  );
}

export function useTranslator() {
  const context = useContext(TranslatorContext);
  return context;
}
export default TranslateProvider;
