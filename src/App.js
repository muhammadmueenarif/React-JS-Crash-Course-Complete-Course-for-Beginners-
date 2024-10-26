import "./App.css";

function App() {
  //   const [toggle, updateToggle] = useState(false);

  return (
    <>
      <div className="calc">
      <input type="text" placeholder="0" id="answer"/>
      <input type="button" value="9" className="button"/>
      <input type="button" value="8" className="button"/>
      <input type="button" value="7" className="button"/>
      <input type="button" value="6" className="button"/>
      <input type="button" value="5" className="button"/>
      <input type="button" value="4" className="button"/>
      <input type="button" value="3" className="button"/>
      <input type="button" value="2" className="button"/>
      <input type="button" value="1" className="button"/>

      <input type="button" value="0" className="button"/>
      <input type="button" value="+" className="button"/>
      <input type="button" value="-" className="button"/>
      <input type="button" value="/" className="button"/>
      <input type="button" value="*" className="button"/>
      <input type="button" value="%" className="button"/>
      <input type="button" value="." className="button"/>

      <input type="button" value="Clear" className="button button1"/>
      <input type="button" value="=" className="button button1"/>
      </div>
    </>
  );
}
export default App;
