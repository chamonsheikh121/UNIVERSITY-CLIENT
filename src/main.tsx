import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.tsx";
import { Provider } from "react-redux";
import { persister, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-right"/>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <RouterProvider router={routes}></RouterProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
