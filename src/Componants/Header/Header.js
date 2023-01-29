import React from 'react';
import logo from '../../Images/dumbells.png';
import './Header.css';

const Header = () => {
    return (
        <nav className='container d-flex g-2 mt-5 shadow-lg p-2 mb-5 bg-body rounded'>
            <div className=' header'>
                <img src={logo} alt=""></img>


            </div>
            <div className='Tutorial'>
                <h1 className='mt-3 text-info px-4 g-4'> Dream Club</h1>


            </div>





        </nav>


    );
};

export default Header;