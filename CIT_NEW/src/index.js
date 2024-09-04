import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./tailwind.css";
import App from "./App";
import ChatComponent from "./routes/ChatComponent";
import AudioOnLoad from "./AudioOnLoad";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>

  <ChatComponent/>
    <App />
  </BrowserRouter>
);
