import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { Login } from './features/login/Login';
import { Main } from './features/login/Main';
import { Ssps } from './features/login/Ssps';
import { Placements } from './features/login/Placements';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/ssps" element={<Ssps />} />
        <Route path="/placements" element={<Placements />} />
      </Routes>
    </div>
  );
}