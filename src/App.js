// import { useEffect } from "react";
import "./App.css";
import Board from "./components/Board";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function App() {
  return (<>
    <h1 style={{textAlign: "center"}}>Tic tac toe</h1> 
    <div className="App" style={style}>
      <Board />
    </div>
  </>
  );
}

export default App;
