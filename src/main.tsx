import ReactDOM from "react-dom/client";
import App from "./App/App.tsx";
import { setupStore } from "store/index.ts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Registration } from "pages/Registration/Registration.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "pages/Login/Login.tsx";
import { Profile } from "pages/Profile/Profile.tsx";
import { Menu } from "pages/Menu/Menu.tsx";
import { Dish } from "pages/Dish/Dish.tsx";
import { Cart } from "pages/Cart/Cart.tsx";
import { Purchase } from "pages/Purchase/Purchase.tsx";
import { Orders } from "pages/Orders/Orders.tsx";
import { Order } from "pages/Order/Order.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/item/:id",
        element: <Dish />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/purchase",
        element: <Purchase />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/order/:id",
        element: <Order />,
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
