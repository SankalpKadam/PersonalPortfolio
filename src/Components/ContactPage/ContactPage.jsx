import React from 'react';
import './ContactPage.css';
import LinkedIn from '@mui/icons-material/LinkedIn';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import EmailIcon from '@mui/icons-material/Email';
function ContactPage() {
    return (
        <div className='contactpage'>
            <NavBar/>
            <div className="contactpage__content">

                <div className='contactpage__title'>
                    Say Hello !!!!
                </div>
                <div className='contactpage__mailInfo'>
                    I will be graduating in Spring 2024 and currently looking for full time opportunities. If you have any opportunity for me or if you just want to say hi, feel free to reach out to me at <span>
                        
                        ssk2320@mavs.uta.edu <EmailIcon fontSize='small'/>
                        </span>
                </div>
                <div className='contactpage__linkedin'>
                    You can also connect with me on LinkedIn - <span>
                        <LinkedIn fontSize='large' />
                        </span>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactPage
