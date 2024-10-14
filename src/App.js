import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
function App() {
  return (
    
    <div className="App">
      Hello
    {/* <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/projectsarchive" element={<ProjectPage />}/>
      <Route path="/contact" element={<ContactPage />}/>
    </Routes> */}
      <Navbar/>
      <Banner/>
      {/* <ProjectPage /> */}
      {/* <AboutPage/> */}
      {/* <HomePage/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
