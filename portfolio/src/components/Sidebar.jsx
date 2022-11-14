import '../css/side.css'
import {IoLogoSoundcloud, IoLogoGithub, IoLogoLinkedin, IoEllipse} from 'react-icons/io5';

const size = 30;

export default () => {
    return (
        <div id='sidediv'>
            <ul id='sidelist'>
                <li><a href="https://github.com/henryvergote"><IoLogoGithub class="icon"/></a></li>
                <li><a href="https://www.linkedin.com/in/henry-vergote-989ab8207/"><IoLogoLinkedin class="icon"/></a></li>
                <li><a href="https://soundcloud.com/ryverbe"><IoLogoSoundcloud class="icon"/></a></li>
            </ul>
        </div>
)}