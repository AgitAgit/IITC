import './Navbar.css';
import { Link, NavLink } from "react-router-dom";

const navItems = ["Home", "About", "Add-pokemon"];

export default function NavBar(){

    return <div>
        {(navItems.map((item) => {
            return <NavLink 
            key={item} 
            to={item === "Home" ? "/" : item.toLocaleLowerCase()} 
            className={`link-item ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}`}>
                {item}
            </NavLink>
        }))}
    </div>
}