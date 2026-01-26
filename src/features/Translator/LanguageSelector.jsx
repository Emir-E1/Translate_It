import { useEffect, useState } from "react";
import { useTranslator } from "../../context/TranslatorContext";

function LanguageSelector({ resolveLanguages, role }) {
  const { pairsLanguages, currentLanguage, targetLanguage } = useTranslator();
  const [myLanguages] = useState([currentLanguage, targetLanguage]);
  const [isSelected, setIsSelected] = useState(
    role === "source" ? currentLanguage : targetLanguage,
  );

  function handleResolve(code) {
    resolveLanguages(code);
    setIsSelected(code);
  }

  return (
    <div className="flex w-full flex-wrap items-center gap-3">
      <div className="flex flex-wrap items-center gap-2">
        {myLanguages?.map((code) => {
          const lang = pairsLanguages.find((l) => l.code === code);
          const selected = isSelected === code;

          return (
            <button
              key={code}
              type="button"
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                selected
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/25"
                  : "bg-white/10 text-gray-300 hover:bg-white/15 hover:text-white"
              }`}
              onClick={() => handleResolve(code)}
            >
              {lang?.name}
            </button>
          );
        })}
      </div>

      <select
        className="rounded-lg bg-gray-800 px-3 py-2 text-sm text-white outline-none transition focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
        onChange={(e) => handleResolve(e.target.value)}
        value={role === "source" ? currentLanguage : targetLanguage}
      >
        {pairsLanguages.map((el) => (
          <option key={el.code} value={el.code}>
            {el.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
