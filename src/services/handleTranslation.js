import { franc } from "franc";

//translate
export async function getTranslation(input, currentLanguage, targetLanguage) {
  if (!input || input === "") return;
  //https://api.mymemory.translated.net/get?q=${input}!&langpair=${currentLanguage.code}|${targetLanguage.code}
  //  https://api.mymemory.translated.net/get?q={INPUT}!&langpair={CURRENT}|{TARGET}
  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${input}!&langpair=${currentLanguage.code}|${targetLanguage.code}`,
    );
    const { responseData } = await res.json();

    return responseData.translatedText;
  } catch (error) {
    console.log(error);
  }
}

export function autoDetect(text) {
  return franc(text, { minLength: 1 });
}
//https://api.mymemory.translated.net/get?q=hi!&langpair=en|fr
