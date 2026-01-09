import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CarCard from "./components/CarCard";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CarCard />
  </StrictMode>
);
