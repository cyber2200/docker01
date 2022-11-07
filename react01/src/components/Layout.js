import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';

function Layout() {
    useEffect(() => {
        console.log('useEffect');
    });
    console.log('s');
    return (
        <div>
            <div>
                <Menu />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;