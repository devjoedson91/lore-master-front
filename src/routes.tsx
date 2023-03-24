import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/home/Dashboard';
import { AdminPages } from './pages/admin/AdminPages';

interface PrivateRouteProps {
    children: any;
    redirectTo: string;
}

const PublicRoute = ({ children, redirectTo }: PrivateRouteProps) => {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? <Navigate to={redirectTo} /> : children;
};

const PrivateRoute = ({ children, redirectTo }: PrivateRouteProps) => {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PublicRoute redirectTo="/dashboard">
                        <SignIn />
                    </PublicRoute>
                }
            />
            <Route
                path="/signup"
                element={
                    <PublicRoute redirectTo="/dashboard">
                        <SignUp />
                    </PublicRoute>
                }
            />
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute redirectTo="/">
                        <Dashboard />
                    </PrivateRoute>
                }
            />
            <Route
                path="/admin"
                element={
                    <PrivateRoute redirectTo="/">
                        <AdminPages />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
}
