import "antd/dist/antd.css";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore} from "redux";
import App from "./App";
import {rootReducer} from "./reducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
