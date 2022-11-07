import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Pages from './pages/Pages';
import Settings from './pages/Settings';
import Release from './pages/Release';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Login />}
      />
      <Route
        element={<ProtectedRoute />}
      >
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/pages"
          element={<Pages />}
        />
        <Route
          path="/settings"
          element={<Settings />}
        />
        <Route
          path="/release"
          element={<Release />}
        />
      </Route>
    </>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}