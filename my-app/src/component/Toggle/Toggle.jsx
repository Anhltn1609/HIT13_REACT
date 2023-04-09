import React, { useState } from 'react';
import Greeting from '../greeting/Greeting';

const Toggle = () => {
    const [on, setOn] = useState(false);
    const handleSetOn = () => {
        setOn(!on)
    }
    return (
        <div>
            <button className='button' onClick={handleSetOn}></button>
            { on && <Greeting></Greeting>}
        </div>
    );
};

export default Toggle;