import React from "react";
import ReactDOM from "react-dom/client";
import "../src/app/layout/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Routes.tsx";
import { StoreProvider } from "./app/context/StoreContext.tsx";
import { configureStore } from "./app/store/configureStore.ts";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StoreProvider>
  </React.StrictMode>
);
