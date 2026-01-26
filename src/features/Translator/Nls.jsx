import { useState } from "react";
import { useTranslator } from "../../context/TranslatorContext";

function Nls({ resolveLanguages, managedLanguage }) {
  const { pairsLanguages } = useTranslator();

  const [myLanguages, setMyLanguages] = useState([managedLanguage]); // tableau d'objets
  const [selected, setSelected] = useState(managedLanguage.code); // code sélectionné

  // ajouter une langue depuis le select
  function handleMyLanguages(code) {
    if (!code) return;

    const language = pairsLanguages.find((l) => l.code === code);
    if (!language) return;

    setMyLanguages((prev) => {
      // éviter doublons
      if (prev.some((l) => l.code === language.code)) return prev;

      const updated = [...prev, language];
      // garder max 3
      return updated.slice(-3);
    });

    // optionnel : sélectionner directement la langue ajoutée
    setSelected(language.code);
    resolveLanguages(language);
  }

  // sélectionner une langue via bouton
  function handleSelection(code) {
    setSelected(code);
    resolveLanguages(code);
  }

  return (
    <div className="flex w-full flex-wrap items-center gap-3">
      {/* boutons des langues déjà sélectionnées */}
      <div className="flex flex-wrap items-center gap-2">
        {myLanguages.map((el) => {
          const selectedLang = selected === el.code;
          return (
            <button
              key={el.code}
              type="button"
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                selectedLang
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/25"
                  : "bg-white/10 text-gray-300 hover:bg-white/15 hover:text-white"
              }`}
              onClick={() => handleSelection(el.code)}
            >
              {el.name}
            </button>
          );
        })}
      </div>

      {/* select pour ajouter une nouvelle langue */}
      <select
        className="rounded-lg bg-gray-800 px-3 py-2 text-sm text-white outline-none transition focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
        onChange={(e) => handleMyLanguages(e.target.value)}
        value={selected}
      >
        <option value="">SELECT LANGUAGE</option>
        {pairsLanguages.map((el) => (
          <option key={el.code} value={el.code}>
            {el.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Nls;
