import Desktop from "./desktop";
import Window from "./window";
import "../assets/css/about.css";

export default function About() {
    return (
        <>
        <Window title="About me" width={40} height={30} >
            <>
            <div className="menu-bar">
            <p><span className="u">F</span>ile</p>
            <p><span className="u">E</span>dit</p>
            <p><span className="u">V</span>iew</p>
            <p>F<span className="u">a</span>vorites</p>
            <p><span className="u">H</span>elp</p>
        </div>
        <div className="address">
            <p className="text">Address:</p>
            <p className="address-link">https://www.henryvergote.be</p>
        </div>
        <div className="webpage">
            <p>Hello, my name is Henry Vergote.</p>
            <img src="/src/assets/images/henry_vergote.jpeg" alt="picture henry vergote" className="me"/>
            <p>I'm a student at Hogeschool Gent. I'm currently studying for a bachelor's degree in computer science with a specialization in mobile and enterprise development.</p>
            <br/>
            <p>In my free time I like to enjoy some music or experiment with <a href="https://soundcloud.com/ryverbe" className="music-link">making music</a> myself</p>
        </div>
        </>
        </Window>
        <Desktop title="About me"/>
        </>
    )
}