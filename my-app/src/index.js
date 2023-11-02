import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Pages/header/header";
import Footer from "./Pages/footer/footer";
import Sidebar from "./Pages/sidebar/sidebar";
import Main from "./Pages/main/main";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <Header />
    <Main />
    <Sidebar />
    <Footer />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
