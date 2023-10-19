import "./styles/app.scss";
import { Head } from "components/Head/Header";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="app">
      <Head />
      <Outlet />
    </div>
  );
};

export default App;
