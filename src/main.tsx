import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MenuToggleProvider from "./context/MenuToggleProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MenuToggleProvider>
      <App />
    </MenuToggleProvider>
  </StrictMode>
);
