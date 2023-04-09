import React from "react";
import Cells from "./Cells";

const Board = (props) => {
  // console.log(props);

  return (
    <div className="Tictoctoe-board">
      {props.cells.map((item, index) => (
        <Cells key={index}
         value={item} 
         onClick={() => props.onClick(index)}>
         {/* onclick trais laf cuar cells(props.onclick) conf onclik phari duoc truyen vao tu giao dienj been tictoctoe.js  */}
         </Cells>
      ))}
    </div>
  );
};

export default Board;
