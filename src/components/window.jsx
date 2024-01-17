import { Link } from "react-router-dom";
import "../assets/css/window.css";

export default function Window(props) {
    const { title, children, width = 20, height = 10 } = props;
    return (
        <div className="window border-style" style={{width: width + 'rem', height: height + "rem"}}>
        <div className="title">
            <p>{title}</p>
            <Link to='/' className="border-style">X</Link>
        </div>
            {children}
        </div>
    )
}