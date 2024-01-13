import './App.css';
import NavBar from './Components/Navbar/NavBar';
import HomePage from './Components/LandingPage/HomePage'
import Footer from './Components/Footer/Footer';
import AboutPage from './Components/AboutPage/AboutPage';
import ProjectPage from './Components/ProjectArchieve/ProjectPage';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/projectsarchive" element={<ProjectPage />}/>
    </Routes>
      {/* <NavBar/> */}
      {/* <ProjectPage /> */}
      {/* <AboutPage/> */}
      {/* <HomePage/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
