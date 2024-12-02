import { Link } from "react-router-dom";

const navItems = ["Home", "About", "Add-pokemon"];

export default function NavBar(){

    return <div>
        {(navItems.map((item) => {
            return <Link key={item} to={item === "Home" ? "/" : item.toLocaleLowerCase()}><button>{item}</button></Link>
        }))}
    </div>
}