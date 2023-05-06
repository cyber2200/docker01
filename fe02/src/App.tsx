import { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Outlet, Link, useLocation } from 'react-router-dom';
import { Login } from './features/login/Login';
import { Main } from './features/login/Main';
import { Data } from './features/login/Data';
import { Users } from './features/login/Users';
import { getCookie } from './lib/utils';

export default function App() {
  const location = useLocation();
  useEffect(() => {
    const authApiCall = async () => {
      const unSecuredRoutes = ['/'];
      if (! unSecuredRoutes.includes(location.pathname)) {
        const authData = await axios.post('http://localhost:3003/api/auth', { session_id: getCookie('session_id') });
        if (authData.data.res === 'NOK') {
          window.location.href = '/';
        }
      }
    };

    authApiCall();
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/users" element={<Users />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </div>
  );
}