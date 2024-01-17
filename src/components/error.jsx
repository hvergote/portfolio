import Desktop from "./desktop";
import Window from "./window";
import "../assets/css/error.css";
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <>
        <Window title="Error" width={20} height={10}>
            <>
                <div className="content">
                    <img src="/src/assets/images/error_icon.png" alt="Error icon" />
                    <div className="text">There's nothing to see here!<br/> Click OK to go back</div>
                </div>
                <Link to="/" className="link-btn"><button className="ok-btn"><p>OK</p></button></Link>
            </>
        </Window>
        <Desktop />
        </>
    )
}