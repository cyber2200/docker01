import { Link } from "react-router-dom";

function Menu() {
    return (
        <div>
            <Link to="/dashboard">Dashboard</Link> | <Link to="/pages">Pages</Link> | <Link to="/settings">Settings</Link> | <Link to="/release">Release</Link>
        </div>
    )
}

export default Menu;