import { useEffect, useState } from "react";
import { useTranslator } from "../../context/TranslatorContext";

const MAX_LANGUAGES = 3;

function LanguagesSelector({ managedLanguage, resolveLanguages }) {
  const { pairsLanguages } = useTranslator();

  const [myLanguages, setMyLanguages] = useState([managedLanguage]);

  const [selectedCode, setSelectedCode] = useState(managedLanguage.code);

  useEffect(() => {
    if (!managedLanguage?.code) return;

    setSelectedCode(managedLanguage.code);

    setMyLanguages((prev) => {
      if (prev.some((l) => l.code === managedLanguage.code)) return prev;

      //FIFO
      return [...prev, managedLanguage].slice(-MAX_LANGUAGES);
    });
  }, [managedLanguage]);

  function handleSelect(code) {
    if (!code) return;

    const language = pairsLanguages.find((l) => l.code === code);
    if (!language) return;

    setMyLanguages((prev) => {
      if (prev.some((l) => l.code === language.code)) return prev;
      return [...prev, language].slice(-MAX_LANGUAGES);
    });

    setSelectedCode(language.code);
    resolveLanguages({ ...language });
  }

  function handleBubbleClick(code) {
    const language = myLanguages.find((l) => l.code === code);
    if (!language) return;

    setSelectedCode(code);
    resolveLanguages({ ...language });
  }

  return (
    <div className="flex w-full flex-wrap items-center gap-3">
      {}
      <div className="flex flex-wrap items-center gap-2">
        {myLanguages.map((lang) => {
          const isActive = lang.code === selectedCode;

          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleBubbleClick(lang.code)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                isActive
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/25"
                  : "bg-white/10 text-gray-300 hover:bg-white/15 hover:text-white"
              } `}
            >
              {lang.name}
            </button>
          );
        })}
      </div>

      {/* SELECT */}
      <select
        className="rounded-lg bg-gray-800 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-cyan-500/20"
        value=""
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="">SELECT LANGUAGE</option>
        {pairsLanguages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguagesSelector;
