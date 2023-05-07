import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/home')
    }
    return (
        <div onClick={handleClick} className='p-5 bg-blue-500 text-white w-[200px]'>
            About
        </div>
    );
};

export default About;