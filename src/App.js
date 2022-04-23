import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Game Tic tac toe</h1>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Board />
      </div>
    </>
  );
}

export default App;
