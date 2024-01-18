import { Link } from "react-router-dom";
import "../assets/css/window.css";

export default function Window(props) {
    const { title = "New window", children, width = 20, height = 10, blueTitleBar = true } = props;
    return (
        <div className="window border-style" style={{width: width + 'rem', height: height + "rem"}}>
        <div className="title" style={{backgroundColor: blueTitleBar ? "var(--blue)" : "var(--darkgray)"}}>
            <p>{title}</p>
            <Link to='/' className="border-style">X</Link>
        </div>
            {children}
        </div>
    )
}