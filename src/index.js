import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/mdbootstrap/css/bootstrap.css";
import "../node_modules/mdbootstrap/css/mdb.css";
import "../node_modules/mdbootstrap/css/style.css";
import "./index.css";
import App from "./App";
// import Err404 from "./components/Err404";

ReactDOM.render(
   <React.StrictMode>
      {/* <Err404> */}
         <App />
      {/* </Err404> */}
   </React.StrictMode>,
   document.getElementById("root")
);
