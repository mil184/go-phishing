import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link to="/">
                <img src="/assets/logo.jpg" alt="logo"/>
            </Link>
        </div>
     );
}
 
export default Navbar;