import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/App";

const root = createRoot(document.getElementById("app")!);

if (process.env.NODE_ENV === "development") {
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
} else {
    root.render(<App />);
}