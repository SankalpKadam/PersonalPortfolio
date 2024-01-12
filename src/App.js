import './App.css';
import NavBar from './Components/Navbar/NavBar';
import HomePage from './Components/LandingPage/HomePage'
import Footer from './Components/LandingPage/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
