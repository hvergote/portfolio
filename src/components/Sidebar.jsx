import '../css/side.css'
import {IoLogoSoundcloud, IoMail, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5';

const size = 30;

export default () => {
    return (
        <div id='sidediv'>
            <ul id='sidelist'>
                <li><a href="mailto:henry.vergote@hotmail.be"><IoMail class="icon" id="mail"/></a></li>
                <li><a href="https://github.com/hvergote" target="_blank"><IoLogoGithub class="icon" id='git'/></a></li>
                <li><a href="https://www.linkedin.com/in/henry-vergote-989ab8207/" target="_blank"><IoLogoLinkedin class="icon" id='linked'/></a></li>
                <li><a href="https://soundcloud.com/ryverbe" target="_blank"><IoLogoSoundcloud class="icon" id='sound'/></a></li>
            </ul>
        </div>
)}