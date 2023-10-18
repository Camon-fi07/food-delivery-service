import { Registration } from "pages/Registration/Registration";
import "./styles/app.scss";
import { Head } from "components/Head/Header";
function App() {
  return (
    <div className="app">
      <Head />
      <Registration />
    </div>
  );
}

export default App;
