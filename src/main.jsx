import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/configureStore.jsx";
import { Provider } from "react-redux";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import MainAdmin from "./admin/MainAdmin.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App />
          <MainAdmin />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
