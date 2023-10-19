import ReactDOM from "react-dom/client";
import App from "./App/App.tsx";
import { setupStore } from "store/index.ts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Registration } from "pages/Registration/Registration.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <div>Menu</div>,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <div>Login</div>,
      },
      {
        path: "/profile",
        element: <div>Profile</div>,
      },
      {
        path: "/item/:id",
        element: <div>Item</div>,
      },
      {
        path: "/cart",
        element: <div>Cart</div>,
      },
      {
        path: "/purchase",
        element: <div>Purchase</div>,
      },
      {
        path: "/orders",
        element: <div>Orders</div>,
      },
      {
        path: "/order/:id",
        element: <div>Order</div>,
      },
    ],
  },
]);

const store = setupStore();
const persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
);
