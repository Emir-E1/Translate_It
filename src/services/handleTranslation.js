//translate
export default async function getTranslation(
  input,
  currentLanguage,
  targetLanguage,
) {
  if (!input) return;
  //  https://api.mymemory.translated.net/get?q={INPUT}!&langpair={CURRENT}|{TARGET}
  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${input}!&langpair=${currentLanguage}|${targetLanguage}`,
    );
    const { responseData } = await res.json();
    return responseData.translatedText;
  } catch (error) {
    console.log(error);
  }
}

//pairs
const pairsLanguages = [
  { code: "en", name: "English" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
];

//https://api.mymemory.translated.net/get?q=hi!&langpair=en|fr
