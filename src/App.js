import './App.css';
import NavBar from './Components/Navbar/NavBar';
import HomePage from './Components/LandingPage/HomePage'
import Footer from './Components/LandingPage/Footer/Footer';
import AboutPage from './Components/AboutPage/AboutPage';
import ProjectPage from './Components/ProjectArchieve/ProjectPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ProjectPage />
      {/* <AboutPage/> */}
      {/* <HomePage/> */}
      <Footer/>
    </div>
  );
}

export default App;
