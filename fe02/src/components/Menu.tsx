import { Link } from "react-router-dom";
import { getCookie, setCookie } from "../lib/utils";
import axios from 'axios';

const Menu = () => {
    const logout = async () => {
        await axios.post('http://localhost:3003/api/logout', {session_id: getCookie('session_id')});
        setCookie('session_id', '', 365*3);
        window.location.href = '/';
    };

    return (
        <div>
            <Link to="/main">Main</Link> | <Link to="/users">Users</Link> | <Link to="/data">Data</Link> | <Link to="#" onClick={logout}>Logout</Link>
        </div>
    );
}

export default Menu;