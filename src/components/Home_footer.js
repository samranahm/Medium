import {Link} from 'react-router-dom';

function HomeFooter(){
    return(
        <footer className="app-footer">
        <Link to={"/help"} className="footer-button">Help</Link>
        <Link to={"/status"} className="footer-button">Status</Link>
        <Link to={"/about"} className="footer-button">About</Link>
        <Link to={"/career"} className="footer-button">Career</Link>
        <Link to={"/press"} className="footer-button">Press</Link>
        <Link to={"/blog"} className="footer-button">Blog</Link>
        <Link to={"privacy"} className="footer-button">Privacy</Link>
        <Link to={"/terms"} className="footer-button">Terms</Link>
        <Link to={"/text-to-speech"} className="footer-button">Text to speach</Link>
        <Link to={"/teams"} className="footer-button">Teams</Link>
      </footer>
    )
};

export default HomeFooter;