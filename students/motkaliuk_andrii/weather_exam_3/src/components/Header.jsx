import { NavLink } from "react-router-dom";

const navClass = "mr-4 font-bold py-2 px-4 rounded";

function getNavClasses({ isActive }) {
    return isActive ? `${navClass} nav-active` : navClass;
}

function Header() {
    return (
        <header className="py-5 border-b flex justify-between container">
            <div>Logo</div>
            <nav>
                <NavLink className={getNavClasses} to="/">Home</NavLink>
                <NavLink className={getNavClasses} to="/tv">Map</NavLink>
            </nav>
        </header>
    );
}

export default Header;
