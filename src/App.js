import React, { useEffect, useState } from "react";
import "./App.css";
import "./counter.css";
import Test from "./test";

function App() {
  const [toggle, updateToggle] = useState(false);

  return (
    <div>
      <button onClick={()=> {updateToggle(!toggle);}}>Toggle</button>
      {toggle && <Test/>}
    </div>
  );
}
export default App;
