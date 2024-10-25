import React, { useState } from "react";
import "../counter.css";

function Counter() {
    let count = 0;
    const [currentState, updatedState] = useState(count);

    const handleClick = ()=> {
        updatedState(currentState+1);
    }
  return (
    <>
     <div className="counter-parent">
     <div className="main-div">
        <h3>Counter</h3>
        <button onClick={handleClick}>{currentState}</button>
      </div>
     </div>
    </>
  );
}

export default Counter;
