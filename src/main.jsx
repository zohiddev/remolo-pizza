import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.scss";
import "swiper/css";
import { store } from "./redux/store.js"

const reRender = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>
  );
};
reRender()
store.subscribe(reRender)
  
