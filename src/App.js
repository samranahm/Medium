import './App.css';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import About from './components/About';
import Career from './components/Career';
import Status from './components/Status';



// Media Import
import logo from './media/pictures/logo.png';



function App() {
  return (
    
    <div className="App">
      <header className="app-header">
        <div className="header-buttons-con">
          <button className="header-button">Our Story</button>
          <button className="header-button">Membership</button>
          <button className="header-button">Write</button>
          <button className="header-button">Sign In</button>
          <button className="get-started">Get Started</button>
        </div>
        <img src={logo} alt="Logo" className="header-logo" /> 
      </header>
      <div className="hero-section">
          <div className="text">
          <h2>Human <br />stories & ideas</h2>
          <h3> Place to read, write, and deepen your understanding </h3>
          <button className="start-reading-btn">Start Reading</button>          
        </div>
          <div className="img-container"></div>
      </div>
      <footer className="app-footer">
        <Link to={"/help"} className="footer-button">Help</Link>
        <Link to={"/status"} className="footer-button">Status</Link>
        <Link to={"/about"} className="footer-button">About</Link>
        <Link to={"/career"} className="footer-button">Career</Link>
        <Link to={"/press"} className="footer-button">Press</Link>
        <Link to={"/blog"} className="footer-button">Blog</Link>
        <Link to={"privacy"} className="footer-button">Privacy</Link>
        <Link to={"/terms"} className="footer-button">Terms</Link>
        <Link to={"/text-to-speach"} className="footer-button">Text to speach</Link>
        <Link to={"/teams"} className="footer-button">Teams</Link>
      </footer>
    </div>


   

  );
}

function RoutesConfig(){
    return(
      <Router>
   <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/about' element={<About  logo={logo}  />} />
    <Route path='/career' element={<Career logo={logo} />} />
    <Route path='/status' element={<Status />} />

   </Routes>
     </Router>
    )
}

export default RoutesConfig;
