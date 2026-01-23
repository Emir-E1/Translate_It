import { useTranslator } from "../../context/TranslatorContext";

const pairsLanguages = [
  { code: "en", name: "English" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
  { code: "ru", name: "Russian" },
];
const getLanguageName = (code) =>
  pairsLanguages.find((l) => l.code === code)?.name ?? code;

function LanguageSelector() {
  const { myLanguages, handleMyLanguages } = useTranslator();
  return (
    <div className="flex w-full flex-wrap items-center gap-3">
      <select
        className="rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 text-white transition-colors duration-200 hover:border-gray-500 focus:border-blue-500 focus:outline-none"
        onChange={(e) => handleMyLanguages(e.target.value)}
      >
        {pairsLanguages.map((el) => (
          <option
            value={el.code}
            key={el.code}
            className="bg-gray-800 text-white"
          >
            {el.name}
          </option>
        ))}
      </select>
      <div className="flex flex-wrap items-center gap-2">
        {myLanguages.map((code) => (
          <span
            key={code}
            className="rounded-full bg-gray-600 px-3 py-1 text-sm font-medium text-white"
          >
            {getLanguageName(code)}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LanguageSelector;
