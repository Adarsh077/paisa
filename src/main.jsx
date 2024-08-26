import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AppThemeProvider from "./theme/AppThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppThemeProvider themeMode="dark" primaryColor="#f3f3f3">
        <App />
      </AppThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
