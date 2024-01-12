import './App.css';
import NavBar from './Components/Navbar/NavBar';
import HomePage from './Components/LandingPage/HomePage'
import Footer from './Components/LandingPage/Footer/Footer';
import AboutPage from './Components/AboutPage/AboutPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AboutPage/>
      {/* <HomePage/> */}
      <Footer/>
    </div>
  );
}

export default App;
