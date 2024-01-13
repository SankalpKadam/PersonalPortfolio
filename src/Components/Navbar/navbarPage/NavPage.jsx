import React from 'react';
import './NavPage.css';
import { Link } from 'react-router-dom';
function NavPage({ close }) {
    return (
        <div className='navpage'>
            <div className='navpage__menu'>

                <div className='navpage__menuItem' onClick={() => {
                    close(false)
                }}>
                    <span className='navpage__closeBtn'>
                        X
                    </span>
                </div>
                <div className='navpage__menuItem'>
                    <span className='navpage__itemText'>
                        <Link to={"/projectsarchive"} className='menuitem'>Projects</Link>
                    </span>
                </div>
                <div className='navpage__menuItem'>
                    <span className='navpage__itemText'>
                        <Link to={"/about"} className='menuitem'>About</Link>
                    </span>
                </div>
                <div className='navpage__menuItem'>
                    <span className='navpage__itemText'>

                        Resume
                    </span>
                </div>
                <div className='navpage__menuItem'>
                    <span className='navpage__itemText'>

                        Contact
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NavPage
