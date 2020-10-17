import React from "react";
import { createClient, Provider } from 'urql';
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

const client = createClient({
  url: 'https://api.8base.com/cke6fmwrw000208ii3jhkg7n5', 
  fetchOptions: () => ({ headers: { authorization: `Bearer 27ec12bf-0e82-4548-9e40-dafcfb2bc5be`}})
});
ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
