import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updateRedirect } from '../redux/login';
import { verifyActionApi } from '../redux/verify';

const useAuth = async () => {
    return true;
}

function ProtectedRoute() {
    const dispatch = useDispatch();
    
    dispatch(updateRedirect(false));
    dispatch(verifyActionApi());

    if (!useAuth()) {
        return (
            <Navigate replace to="/" />
        )
    }
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

export default ProtectedRoute;