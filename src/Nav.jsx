import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Nav = () => {
    const ListMenu = [
        {
            id : 1,
            to: '/home',
            title: 'Home'
        },
        {
            id: 2,
            to: '/about',
            title: 'About',

        },
        {
            id: 3,
            to: '/content',
            title : 'Content'
        },{
            id: 4,
            to: "/abc",
            title: 'Abc'
        }
    ]


    return (
        <> 
        <div className='text-green-400 flex justify-center gap-10'>
           {
            ListMenu.map(item => 
            <NavLink key={item.id} className={({isActive}) => (isActive?"text-teal-500":"")} to={item.to}>{item.title}</NavLink>
            )
           }
            
             {/* <NavLink className={({isActive}) => (isActive ? "text-green-400":"" )} to={"/"}>Home</NavLink>
            <Link to={"/about"}>About</Link>
            <Link to={"/content"}>Content</Link> */}
        </div>
        <Outlet></Outlet>
        
        
        </>
    );
};

export default Nav;