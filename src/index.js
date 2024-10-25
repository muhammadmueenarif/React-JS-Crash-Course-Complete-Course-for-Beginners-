import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import User from "./User.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <User name="Kashan" expertise="Developer" />
    <User name="Ali" expertise="Designer" />
    <User name="Hassan" expertise="Marketing Expert" />
    <User name="Hasnain" expertise="SEO Expert" />
    <User name="Faizi" expertise="Network Manager" />
  </>
);
