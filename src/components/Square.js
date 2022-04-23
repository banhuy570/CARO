import React from "react";

const style = {
  width: "100px",
  height: "100px",
  background: "transparent",
  border: "2px solid black"
};
const Square = ({ data, index, handleClick }) => {
  const handleRender = () => {
    if (data[index] === "") {
      return <></>;
    } else if (data[index] === "X") {
      return <div style={{fontSize:"40px",color:"red"}}>X</div> ;
    } else {
      return <div style={{fontSize:"40px",color:"blue"}}>O</div>;
    }
  };
  return (
    <button
      style={style}
      onClick={() => {
        handleClick(index);
      }}
    >
      {handleRender()}
    </button>
  );
};

export default Square;
