import React, { useEffect, useState } from "react";
import Square from "./Square";

const style = {
  width: "300px",
  height: "300px",
  margin: "50px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
};
const winRule = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const isWin = (board) => {
  for (let [a, b, c] of winRule) {
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return true;
    }
  }
  return false;
};
const isDraw = (board) => {
  return board.filter((square) => square === "").length === 0;
};
let status = "";
const Board = () => {
  const [state, setState] = useState({
    player: "X",
    point: {
      X: 0,
      O: 0,
    },
    data: Array(9).fill(""),
    isStopGame: false,
    result: "",
  });
  console.log(state.data);
  useEffect(() => {
    localStorage.setItem("point", JSON.stringify(state.point));
    const data = JSON.parse(localStorage.getItem("point"));
    if (state.result !== "") {
      status = state.result;
    }
    return () => {
      setState({
        player: "X",
        point: {
          ...data,
        },
        data: Array(9).fill(""),
        isStopGame: false,
        result: "",
      });
    };
  }, [state.result]);
  const handleClick = (index) => {
    if (state.isStopGame) {
      return;
    }
    if (state.data[index] === "") {
      state.data[index] = state.player;
      setState({
        ...state,
        player: state.player === "X" ? "O" : "X",
        data: state.data,
      });
    }
    if (isWin(state.data)) {
      setState({
        ...state,
        isStopGame: true,
        result: `${state.player} thắng trận trước`,
        point:
          state.player === "X"
            ? {
                ...JSON.parse(localStorage.getItem("point")),
                X: state.point.X + 1,
              }
            : {
                ...JSON.parse(localStorage.getItem("point")),
                O: state.point.O + 1,
              },
      });
      localStorage.setItem("point", JSON.stringify(state.point));
    }
    if (!isWin(state.data) && isDraw(state.data)) {
      setState({
        ...state,
        isStopGame: true,
        result: "Hòa",
      });
    }
  };
  localStorage.setItem("point", JSON.stringify(state.point));

  return (
    <>
      <div style={style}>
        {[...Array(9)].map((square, index) => (
          <Square
            key={index}
            data={state.data}
            index={index}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div>
        <div>{status}</div>
        <h2>Point :</h2>
        <h2>X : {state.point.X}</h2>
        <h2>O : {state.point.O}</h2>
      </div>
    </>
  );
};
export default Board;
