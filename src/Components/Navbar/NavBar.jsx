import React, { useEffect, useState } from 'react';
import './NavBar.css';
import NavPage from './navbarPage/NavPage';
function NavBar() {
    //using state to keep track if menu was opened
    const [open, setOpen] = useState(false);
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
            {
                    open? <NavPage close={setOpen}/>:null
                }
        </div>
    )
}

export default NavBar;
