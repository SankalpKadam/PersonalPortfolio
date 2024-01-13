import React from 'react';
import './AboutPage.css';
import UniversityData from './UniversityData/UniversityData';
import WorkExp from './WorkEx/WorkExp';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';

function AboutPage() {
    return (
        <div className='aboutpage'>
           <NavBar />
            <div className="aboutpage__title">
                <div className='aboutpage__pageTitle'>
                    ABOUT ME
                    <img src={require("../LandingPage/IMG_9771.png")} alt="" className='aboutpage__image' />
                </div>
                <div className="aboutpage__myInfo">
                    <span>WHO I AM</span>
                    I am currently pursuing a Master's in Computer Science degree at The University of Texas at Arlington. Ever since I was introduced to software development I have been working on uplifting my skills with the dream that one day I will be writing code which will shape people's lives. During this phase I have explored various interests in the field of web, desktop and android application. Apart from coding, I am also a CyberSecurity enthusiast. I have taken some steps such as university level courses and certifications to enhance my knowledge in this domain. I am currently in my final semester and will graduate in Spring 2024 and I have decided that I will be a Software Engineer and realize my dream of writing meaningful code that actually impacts people's lives.
                    <span>WHAT I DO FOR FUN</span>
                    Here's somethings that I like to do apart from programming. I am a sports person and I love to play soccer. I have recently explored and developed a liking for badminton as well. Snooker, carrom and chess are some indoor games that I like.
                    <span>WHAT I BELIEVE</span>
                    Overall, in my life I follow a principle - "To get something new, you have to do something new". I believe in exploring and gathering my own understanding which I believe is an important quality for a Software Engineer.
                </div>
            </div>
            <div className="aboutpage__experience">
                <div className="aboutpage__expTitle">WORK EXPERIENCE</div>
                <div className="aboutpage__expData">
                    <WorkExp />
                </div>
            </div>
            <div className="aboutpage__education">
                <div className="aboutpage__educationTitle">EDUCATION</div>
                <div className="aboutpage__educationData">
                    <UniversityData name="The University of Texas at Arlington" degree={"M.S. Computer Science"} gpa={"3.9"} graduating={"May 2024"} />
                    <UniversityData name={"University of Mumbai"} degree={"B.E. Computer Engineering"} gpa={"9.5"} graduating={"May 2022"} />
                </div>
            </div>
            <div className='aboutpage__techstack'>
                <div className="aboutpage__techTitle">THINGS I KNOW</div>
                <div className="aboutpage__techIcons">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" alt="android" width="40" height="40" /> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40" />  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" /> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40" /> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" /> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" /> <img src="https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg" alt="hadoop" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" /> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40" /> <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="scikit_learn" width="40" height="40" /> <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="40" height="40" /> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40" /> <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="tensorflow" width="40" height="40" />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutPage;
