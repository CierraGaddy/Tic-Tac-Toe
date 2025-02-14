import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Game from "./App.jsx"; // Import main Game component

// Render the Game component inside the root div in index.html
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Game />
  </StrictMode>
);
