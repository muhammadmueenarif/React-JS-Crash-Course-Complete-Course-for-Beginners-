import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header.js";
import Counter from "./components/counter.js";
import "./counter.css";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <Counter />
      </div>
    </>
  );
}
export default App;
