import { Registration } from "pages/Registration/Registration";
import "./styles/app.scss";
import { Head } from "components/Head/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const App = () => {
  const router = createBrowserRouter([
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
  ]);

  return (
    <div className="app">
      <Head />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
