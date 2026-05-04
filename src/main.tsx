import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
// Global styles
import "./index.css";

// Import App (use .js extension to satisfy ESM resolution)
import App from "./App.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1e40af",
    },
    secondary: {
      main: "#0f766e",
    },
  },
});

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

// Render the React application
createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);