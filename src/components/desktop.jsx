import { Link } from "react-router-dom";
import "../assets/css/desktop.css";

export default function Desktop() {
    return (
    <>
    <div className="desktop">
        <Link to="home" className="desktop-icon">
            <div className='icon'>
                <img src="/src/assets/images/pc_icon.png" alt="" />
            </div>
            <p>Henry Vergote</p>
        </Link>
        <Link to="/about" className="desktop-icon">
            <div className='icon'>
                <img src="/src/assets/images/internet_icon.png" alt="" />
            </div>
            <p>About me</p>
        </Link>
        <Link to="/skills" className="desktop-icon">
            <div className='icon'>
                <img src="/src/assets/images/skills_icon.png" alt="" />
            </div>
            <p>Skills</p>
        </Link>
        <Link to='/contact' className="desktop-icon">
            <div className='icon'>
                <img src="/src/assets/images/mail_icon.png" alt="" />
            </div>
            <p>Contact</p>
        </Link>
    </div>
    <div className='taskbar'>
        <div className='start'>
            <div className="img">
                <img src="/src/assets/images/start_icon.png" alt="" />
            </div>
            <div className='start-text'>Start</div>
        </div>
    </div>
    </>
    )
}