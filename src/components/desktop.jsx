import { Link } from "react-router-dom";
import "../assets/css/desktop.css";
import { useEffect, useState } from "react";

function StartMenu() {
    return (
        <div className="start-popup">
            <div className="name">
                Henry Vergote
            </div>
            <div className="start-popup-links">
            {pages.map((page) => {
                return (
                    <Link to={page.link} className="start-link">
                        <div className='start-icon'>
                            <img src={page.icon} alt="" className="start-icon-image"/>
                        </div>
                        <p>{page.title}</p>
                    </Link>
                )
            })}
            <a href="https://github.com/hvergote/portfolio" className="start-link poweroff">
                <div className='start-icon'>
                    <img src="/src/assets/images/poweroff_icon.png" alt="" className="start-icon-image"/>
                </div>
                <p>View source code</p>
            </a>
            </div>
        </div>
    )
}

const pages = [
    {
        title: "Henry Vergote",
        link: "/home",
        icon: "/src/assets/images/pc_icon.png"
    },
    {
        title: "About me",
        link: "/about",
        icon: "/src/assets/images/internet_icon.png"
    },
    {
        title: "Skills",
        link: "/skills",
        icon: "/src/assets/images/skills_icon.png"
    },
    {
        title: "Contact",
        link: "/contact",
        icon: "/src/assets/images/mail_icon.png"
    }
]

export default function Desktop(props) {
    const { title } = props;
    const [currentTime, setCurrentTime] = useState(new Date());
    const [openStart, setOpenStart] = useState(false);

    let tab = null
    if (title != null) {
        let image = ""
        switch (title) {
            case "About me":
                image = "/src/assets/images/internet_icon.png"
                break;
            case "Skills":
                image = "/src/assets/images/skills_icon.png"
                break;
            case "Contact":
                image = "/src/assets/images/mail_icon.png"
                break;
            default:
                image = "/src/assets/images/pc_icon.png"
                break;
        }

        tab = <div className='tab tiles'>
            <img src={image} alt="" className="tab-icon"/>
            {title}
            </div>
    }
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

    const toggleStart = () => {
        setOpenStart(!openStart);
    }

    return (
    <>
    <div className="desktop">
        {pages.map((page) => {
            return (
                <Link to={page.link} className="desktop-icon">
                    <div className='icon'>
                        <img src={page.icon} alt="" />
                    </div>
                    <p>{page.title}</p>
                </Link>
            )
        })}
    </div>
    {openStart && <StartMenu />}
    <div className='taskbar'>
        <div className="tabs">
        <div className='start pointer' onClick={toggleStart}>
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