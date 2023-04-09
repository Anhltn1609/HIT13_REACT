import React, { useState } from 'react';
import './Tictoctoe.css'
import Board from './Board';
import { caculateWinner } from './logic';
const Tictoctoe = () => {
    const[board , setBoard] = useState(Array(9).fill(null));
    const handleClick = () => {};
    const[xIsNext,setXIsNext] = useState(true);
    const winner = caculateWinner(board);
    return (
        <div>
            <Board cells={board} onClick={handleClick}></Board>
            {/* cells laf props cua board  */}
        </div>
    );
};

export default Tictoctoe;