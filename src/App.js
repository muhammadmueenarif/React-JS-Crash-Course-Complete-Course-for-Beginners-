import React, { useEffect, useState } from "react";
import "./App.css";
import "./counter.css";
import Test from "./test";
import Counter from "./components/counter";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";

function App() {
//   const [toggle, updateToggle] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/> {/*default page home*/}
      <Route path="/about" element={<About/>}/> {/*when someone goes on about route, about page will show */}
      </Routes>
    </>
  );
}
export default App;
