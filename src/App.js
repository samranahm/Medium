import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import About from './components/About';
import Career from './components/Career';
import Status from './components/Status';
import HomeFooter from './components/Home_footer';


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
      <HomeFooter />
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
