import ReactDOM from "react-dom/client";
import App from "./App/App.tsx";
import { setupStore } from "store/index.ts";
import { Provider } from "react-redux";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
