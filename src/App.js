import React, { useEffect, useState } from "react";
import "./App.css";
import "./counter.css";
import Test from "./test";
import Counter from "./components/counter";

function App() {
//   const [toggle, updateToggle] = useState(false);

  return (
    <div>
      <header/>
      <Counter/>
    </div>
  );
}
export default App;
