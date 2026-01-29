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
    <div className="flex w-full flex-wrap items-center gap-2">
      <select
        className="rounded-md bg-gray-800 p-1 text-xs text-white outline-none focus:ring-2 focus:ring-cyan-500/20"
        value=""
        onChange={(e) => handleSelect(e.target.value)}
      >
        {pairsLanguages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>

      <div className="flex flex-wrap items-center gap-1">
        {myLanguages.map((lang) => {
          const isActive = lang.code === selectedCode;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleBubbleClick(lang.code)}
              className={`rounded-full px-2 py-1 text-xs font-medium transition-all ${
                isActive
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/25"
                  : "bg-white/10 text-gray-300 hover:bg-white/15 hover:text-white"
              }`}
            >
              {lang.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default LanguagesSelector;
