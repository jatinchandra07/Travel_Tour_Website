import { Link } from "react-router-dom";
//for place of a if we use link tag then we impoert the above pacakge 
import "./Navbar.css";
import {MenuItems} from "./MenuItems";
function Navbar() {
    return(
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Chandra</h1>
            <ul className="nav-menu">
                {MenuItems.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}
export default Navbar;
