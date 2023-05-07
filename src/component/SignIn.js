import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/abc')
    }
    return (
        <div >
            <button type='submit' onClick={handleClick} className='bg-orange-400 w-[100px] text-white cursor-pointer'>Click Here</button>
        <Outlet></Outlet>

        </div>

    );
};

export default SignIn;