import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.scss";
import { store } from "./redux/store.js";
import { StoreContext, StoreProvider } from "./context/storeContext.jsx";

const reRender = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreProvider>
          <App  />
        </StoreProvider>
      </BrowserRouter>
    </React.StrictMode>
  );

}
store.subscribe(reRender)
reRender()