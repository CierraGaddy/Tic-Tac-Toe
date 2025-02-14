import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Game from "./App.jsx"; // ✅ Ensure it points to App.jsx

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Game />
  </StrictMode>
);
