# Translate It

A minimal web app to translate text between many languages. Type, pick source and target languages, get an instant translation.

---

## Features

- **Translation** — Text translation with debounced requests
- **Language detection** — Auto-detect source language (via Franc)
- **Language selector** — Source and target language dropdowns; swap languages
- **Copy to clipboard** — Copy translation with one click
- **Text-to-speech** — Listen to the translation (Web Speech API)
- **Character limit** — 500 characters input with counter

---

## Tech stack

| Category   | Tech |
| ---------- | ---- |
| Framework  | React 18 |
| Build      | Vite |
| Styling    | Tailwind CSS |
| Data       | TanStack Query (React Query) |
| Icons      | Lucide React |
| Language   | Franc (detection), LibreTranslate-compatible API |

---

## Folder structure

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── context/
│   └── TranslatorContext.jsx      # translation state, API calls
├── services/
│   └── handleTranslation.js       # translation & detect API
├── hooks/
│   └── useDebounce.js
├── pages/
│   └── AppTranslator.jsx          # main translator screen
├── features/
│   ├── input/
│   │   ├── InputPanel.jsx
│   │   └── DetectLanguage.jsx
│   ├── output/
│   │   ├── OutputPanel.jsx
│   │   └── SwitchButton.jsx
│   └── Translator/
│       ├── LanguagesSelector.jsx
│       └── TranslateActions.jsx
├── components/
│   ├── CopyClip.jsx
│   └── Transcript.jsx             # TTS
└── ui/
    ├── Button.jsx
    ├── Logo.jsx
    └── Panel.jsx
```

---

**Made by Emir E1**
