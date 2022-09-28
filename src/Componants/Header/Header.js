import React from 'react';
import logo from '../../Images/dumbells.png';
import './Header.css';

const Header = () => {
    return (
         <nav className='container d-flex g-2 mt-5'>
            <div className=' header'>
                <img src={logo} alt=""></img>
                
            </div>
            <div>
                <h1 className='mt-4 m-2 text-primary'>The-Dream-Club</h1>
                <h5 className='mt-4 '>Select Today's Exercise</h5>
                {/* <div className='mt-4 text'>
                  <a href="./tutorial">Tutorial</a>
            </div> */}
            
            </div>
            
            
            
        </nav>
    );
};

export default Header;