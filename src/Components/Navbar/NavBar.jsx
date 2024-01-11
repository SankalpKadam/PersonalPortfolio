import React, { useEffect, useState } from 'react';
import './NavBar.css';
import NavPage from './navbarPage/NavPage';
function NavBar() {
    //using state to keep track if menu was opened
    const [open, setOpen] = useState(false);
    //using this to set menu to false initially
    useEffect(()=>{
        setOpen(false)
    },[])
    const openNavPage = ()=>{
        setOpen(true)
    }
    return (
        <div className='navbar'>
            <div className='navbar__logo'>Sankalp Kadam</div>
            <div className='navbar__menu' onClick={openNavPage}>
                <span className='navbar__line'></span>
                <span className='navbar__line'></span>
                <span className='navbar__line'></span>
            </div>
            {//Conditional rendering
                    open? <NavPage close={setOpen}/>:null
                }
        </div>
    )
}

export default NavBar;
