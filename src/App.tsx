import { useState } from "react";

// Component imports (use .js extension for ESM resolution at runtime)
import Home from "./components/Home.js";
import Sum from "./components/Sum.js";
import Calculator from "./components/Calculator.js";
import Pokemon from "./components/Pokemon.js";
import type { View } from "./types/view.js";

// Side-effect import for styles
import "./App.css";

function App() {
  const [view, setView] = useState<View>("home");

  // Render the current view
  return (
    <>
      {view === "home" && (
        // Pass a simple string-based setter to keep component props as string
        <Home setView={(v: string) => setView(v as View)} />
      )}
      {view === "sum" && (
        <Sum setView={(v: string) => setView(v as View)} />
      )}
      {view === "calculator" && (
        <Calculator setView={(v: string) => setView(v as View)} />
      )}
      {view === "pokemon" && (
        <Pokemon setView={(v: string) => setView(v as View)} />
      )}
    </>
  );
}

export default App;