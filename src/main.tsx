import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Global styles
import "./index.css";

// Import App (use .js extension to satisfy ESM resolution)
import App from "./App.js";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

// Render the React application
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);