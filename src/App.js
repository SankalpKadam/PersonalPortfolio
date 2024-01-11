import './App.css';
import NavBar from './Components/Navbar/NavBar';
import HomePage from './Components/LandingPage/HomePage'
import AboutMe from './Components/LandingPage/AboutMe/AboutMe';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <AboutMe />
    </div>
  );
}

export default App;
