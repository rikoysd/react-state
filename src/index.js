import { createRoot } from "react-dom/client";
import { App } from "./App";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";

const container = document.getElementById("root");
const root = createRoot(container);

// アプリ全体を参照したいので、Appを囲む
root.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>
);
