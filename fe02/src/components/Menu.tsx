import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <Link to="/main">Main</Link> | <Link to="/ssps">SSPs</Link> | <Link to="/placements">Placements</Link>
        </div>
    );
}

export default Menu;