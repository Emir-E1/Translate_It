import { createContext, useContext, useEffect, useState } from "react";
import { getTranslation, autoDetect } from "../services/handleTranslation";
import { franc } from "franc";

const pairsLanguagesFull = [
  { code: "en", name: "English" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
  { code: "de", name: "German" },
  { code: "it", name: "Italian" },
  { code: "pt", name: "Portuguese" },
  { code: "nl", name: "Dutch" },
  { code: "sv", name: "Swedish" },
  { code: "no", name: "Norwegian" },
  { code: "da", name: "Danish" },
  { code: "fi", name: "Finnish" },
  { code: "pl", name: "Polish" },
  { code: "cs", name: "Czech" },
  { code: "hu", name: "Hungarian" },
  { code: "el", name: "Greek" },
  { code: "ro", name: "Romanian" },
  { code: "ru", name: "Russian" },
  { code: "ar", name: "Arabic" },
  { code: "he", name: "Hebrew" },
  { code: "tr", name: "Turkish" },
  { code: "uk", name: "Ukrainian" },
  { code: "hi", name: "Hindi" },
  { code: "bn", name: "Bengali" },
  { code: "ta", name: "Tamil" },
  { code: "th", name: "Thai" },
  { code: "vi", name: "Vietnamese" },
  { code: "zh", name: "Chinese" },
  { code: "ja", name: "Japanese" },
  { code: "ko", name: "Korean" },
];

const ISO3_TO_ISO2 = {
  eng: "en",
  fra: "fr",
  fre: "fr",
  spa: "es",
  deu: "de",
  ger: "de",
  ita: "it",
  por: "pt",
  nld: "nl",
  dut: "nl",
  swe: "sv",
  nor: "no",
  dan: "da",
  fin: "fi",
  pol: "pl",
  ces: "cs",
  cze: "cs",
  hun: "hu",
  ell: "el",
  gre: "el",
  ron: "ro",
  rum: "ro",
  rus: "ru",
  ara: "ar",
  heb: "he",
  tur: "tr",
  ukr: "uk",
  hin: "hi",
  ben: "bn",
  tam: "ta",
  tha: "th",
  vie: "vi",
  zho: "zh",
  chi: "zh",
  jpn: "ja",
  kor: "ko",
  und: "en",
};

const PAIRS_BY_CODE = Object.fromEntries(
  pairsLanguagesFull.map((l) => [l.code, l]),
);

const TranslatorContext = createContext();

function TranslateProvider({ children }) {
  const [input, setInput] = useState("Hello");
  const [translation, setTranslation] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState(PAIRS_BY_CODE["en"]);
  const [targetLanguage, setTargetLanguage] = useState(PAIRS_BY_CODE["fr"]);
  const [isSwitching, setIsSwitching] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    if (!input || !currentLanguage?.code || !targetLanguage?.code) return;

    async function translate() {
      try {
        setIsTranslating(true);
        const result = await getTranslation(
          input,
          currentLanguage,
          targetLanguage,
        );
        setTranslation(result ?? "");
      } finally {
        setIsTranslating(false);
      }
    }

    translate();
    // we deliberately only depend on the language codes, not the whole objects
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, currentLanguage?.code, targetLanguage?.code]);

  function handleSwitch() {
    setIsSwitching(true);
    setInput(translation);
    setTranslation(input);
    setCurrentLanguage({ ...targetLanguage });
    setTargetLanguage({ ...currentLanguage });
    setTimeout(() => setIsSwitching(false), 0);
  }

  function handleDetect(text) {
    const iso3 = autoDetect ? autoDetect(text) : franc(text);
    const iso2 = ISO3_TO_ISO2[iso3] ?? "en";
    const langObj = PAIRS_BY_CODE[iso2] ?? PAIRS_BY_CODE["en"];
    console.log(langObj);
    setCurrentLanguage(langObj);
    return langObj;
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
        handleDetect,
        pairsLanguages: pairsLanguagesFull,
        isSwitching,
        isTranslating,
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
