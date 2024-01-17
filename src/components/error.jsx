import Desktop from "./desktop";
import "../assets/css/error.css";
import { Link } from "react-router-dom";

export default function Error() {
    // const history = useHistory();

    const handleClick = () => {
        // history.push("/");
    }

    return (
        <>
        <div className="window border-style">
        <div className="title">
            <p>Error</p>
            <Link to='/' className="border-style">X</Link>
        </div>
            <div className="content">
                <img src="/src/assets/images/error_icon.png" alt="Error icon" />
                <div className="text">There's nothing to see here!<br/> Click OK to go back</div>
            </div>
            <Link to="/" className="link-btn"><button className="ok-btn"><p>OK</p></button></Link>
        </div>
        <Desktop />
        </>
    )
}