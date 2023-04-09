import React from 'react';

const Cells = ({value,onClick}) => {
    //object destructuring

    return (
        <div className='game-cell' onClick={onClick}>
        {value}
        </div>
    );
};

export default Cells;