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
        <div className="desktop-icon">
            <div className='icon'></div>
            <p>Contact</p>
        </div>
    </div>
    <div className='taskbar'>
        <div className='start'>
            <div className='start-text'>Start</div>
        </div>
    </div>
    </>
    )
}