import React from 'react';
import './NavPage.css';
function NavPage({close}) {
    return (
        <div className='navpage'>
            <div className='navpage__menu'>

                <div className='navpage__menuItem' onClick={()=>{
                    close(false)
                }}>
                    <span className='navpage__closeBtn'>
                        X
                    </span>
                </div>
                <div className='navpage__menuItem'>
                    <span className='navpage__itemText'>
                        Projects
                    </span>
                </div>
                <div className='navpage__menuItem'>
                    <span className='navpage__itemText'>
                        About
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
