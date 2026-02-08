import React from "react";
import ReactDOM from "react-dom/client";
import App, { queryClient } from "./App.jsx";
import "./index.css";
import TranslateProvider from "./context/TranslatorContext.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TranslateProvider>
        <App />
      </TranslateProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
);
