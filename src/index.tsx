import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <div
      style={{
        backgroundImage: `url("https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-25.jpg")`,
        margin: 0,
      }}
    >
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
