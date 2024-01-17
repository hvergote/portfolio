import { Link } from "react-router-dom";
import "../assets/css/desktop.css";

export default function Desktop() {
    return (
    <>
    <div className="desktop">
        <div className="desktop-icon">
            <div className='icon'></div>
            <p>Henry Vergote</p>
        </div>
        <div className="desktop-icon">
            <div className='icon'></div>
            <p>About me</p>
        </div>
        <div className="desktop-icon">
            <div className='icon'></div>
            <p>Skills</p>
        </div>
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