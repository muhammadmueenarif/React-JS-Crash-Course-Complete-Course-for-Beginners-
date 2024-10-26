import { useState } from "react";
import "./App.css";

function App() {
  //   const [toggle, updateToggle] = useState(false);
  const [result, setResult] = useState(""); 

  const handleClick=(event)=> {
    setResult(result.concat(event.target.value));
  }

  const clearState = ()=> {
    setResult("");
  }

  const calculate = ()=> {
    try {
      const num = eval(result);
      setResult(num);
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <>
      <div className="calc">
      <input type="text" placeholder="0" id="answer" value={result}/>
      <input type="button" value="9" className="button" onClick={handleClick}/>
      <input type="button" value="8" className="button" onClick={handleClick}/>
      <input type="button" value="7" className="button" onClick={handleClick}/>
      <input type="button" value="6" className="button" onClick={handleClick}/>
      <input type="button" value="5" className="button" onClick={handleClick}/>
      <input type="button" value="4" className="button" onClick={handleClick}/>
      <input type="button" value="3" className="button" onClick={handleClick}/>
      <input type="button" value="2" className="button" onClick={handleClick}/>
      <input type="button" value="1" className="button" onClick={handleClick}/>

      <input type="button" value="0" className="button" onClick={handleClick}/>
      <input type="button" value="+" className="button" onClick={handleClick}/>
      <input type="button" value="-" className="button" onClick={handleClick}/>
      <input type="button" value="/" className="button" onClick={handleClick}/>
      <input type="button" value="*" className="button" onClick={handleClick}/>
      <input type="button" value="%" className="button" onClick={handleClick}/>
      <input type="button" value="." className="button" onClick={handleClick}/>

      <input type="button" value="Clear" className="button button1" onClick={clearState}/>
      <input type="button" value="=" className="button button1" onClick={calculate}/>
      </div>
    </>
  );
}
export default App;
