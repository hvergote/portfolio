import { Link } from "react-router-dom";
import "../assets/css/desktop.css";
import { useEffect, useState } from "react";

export default function Desktop(props) {
    const { title } = props;
    let tab = null
    if (title != null) {
        tab = <div className='tab tiles'>{title}</div>
    }
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, [])

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
  
    const formattedHours = (hours < 10) ? "0" + hours : hours;
    const formattedMinutes = (minutes < 10) ? "0" + minutes : minutes;
  
    const timeString = `${formattedHours}:${formattedMinutes}`;
  
  

    return (
    <>
    <div className="desktop">
        <Link to="/home" className="desktop-icon">
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
        <div className="tabs">
        <div className='start'>
            <div className="img">
                <img src="/src/assets/images/start_icon.png" alt="" />
            </div>
            <div className='start-text'>Start</div>
        </div>
        {tab}
        </div>
        <div className="clock">{timeString}</div>
    </div>
    </>
    )
}