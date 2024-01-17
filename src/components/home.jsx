import Window from './window.jsx';
import Desktop from './desktop.jsx';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
        <Window title="Home">
            <>
                <div className="content">
                    <img src="/src/assets/images/info_icon.png" alt="Error icon" />
                    <div className="text">Hi! I'm Henry Vergote.<br/>I'm a developer.</div>
                </div>
                <Link to="/" className="link-btn pointer"><button className="ok-btn"><p>OK</p></button></Link>
            </>
        </Window>
        <Desktop title="Home"/>
        </>
    )
}