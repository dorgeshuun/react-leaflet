import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StrictMode } from "react";

const root = document.getElementById("root");

if (!root) {
    throw new Error();
}

ReactDOM.createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>
);
