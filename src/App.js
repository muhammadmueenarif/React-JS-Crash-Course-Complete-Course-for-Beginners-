import React, { useEffect, useState } from "react";
import "./App.css";
import "./counter.css";
import Test from "./test";
import Counter from "./components/counter";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Error from "./components/ErrorPage";

function App() {
  //   const [toggle, updateToggle] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
        <Header /> <Home />
            </>
          }/> {/*header will always show*/}

        <Route path="/about" element={<> <Header/> <About /></>} />{" "}
        {/*when someone goes on /about url, about page will show */}
        <Route path="*" element={<> <Error/> </>} /> {/*when someone enters invalid url, this component will show */}
      </Routes>
    </>
  );
}
export default App;
