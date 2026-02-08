import React from "react";
import ReactDOM from "react-dom/client";
import App, { queryClient } from "./App.jsx";
import "./index.css";
import TranslateProvider from "./context/TranslatorContext.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TranslateProvider>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toasterId="default"
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            removeDelay: 1000,
            style: {
              background: "#212936CC",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              iconTheme: {
                primary: "#7CA9F3",
                secondary: "white",
              },
            },
          }}
        />
        <App />
      </TranslateProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
);
