import React, { useState } from 'react'
import "./Toggle.css";

const Toggle = () => {
    const [on, setOn] = useState(false)
    const handleSetOn = ()=>{
        setOn(!on)
    }
    return (
        <div>
            <div className={`toggle ${on?"active":""}`} onClick={handleSetOn}>
                <div className={`spinner ${on ?"active":""}`}></div>
            </div>
        </div>
    );
};

export default Toggle;