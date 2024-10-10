import React, { useState } from 'react'
import './index.css'
import logo from '../../assets/logo.png'
const Navbar = () => {

    //activeLink
    const [activeLink, setActiveLink] = useState('home__link')
    const changeActiveLink = (e)=>{
        e.preventDefault()
        setActiveLink(e.target.id)
    }
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt="" srcset="" />
        {/* <p>

        Sankalp <span>Kadam</span>
        </p> */}
      </div>
      <div className='navbar__links'>
        <div id='home__link' className={`link ${activeLink==='home__link' ? 'active__link':""}`} onClick={changeActiveLink}>
            Home
        </div>
        <div id='project__link' className={`link ${activeLink==='project__link' ? 'active__link':""}`} onClick={changeActiveLink}>
            Projects
        </div>
        <div id='resume__link' className={`link ${activeLink==='resume__link' ? 'active__link':""}`} onClick={changeActiveLink}>
            Resume
        </div>
      </div>
    </div>
  )
}

export default Navbar
