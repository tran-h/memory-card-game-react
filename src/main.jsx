import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Score from "./components/Score.jsx";
import Cards from "./components/Cards.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Score />
  </StrictMode>
);
