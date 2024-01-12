import './App.css';
import NavBar from './Components/Navbar/NavBar';
import HomePage from './Components/LandingPage/HomePage'
import AboutMe from './Components/LandingPage/AboutMe/AboutMe';
import TopProjects from './Components/LandingPage/ProjectsPage/TopProjects';
import Footer from './Components/LandingPage/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <TopProjects/>
      <AboutMe />
      <Footer/>
    </div>
  );
}

export default App;
