import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store, presistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={presistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
);
