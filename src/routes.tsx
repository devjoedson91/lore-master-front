import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { SignIn } from './pages/SignIn';
import { Dashboard } from './pages/Dashboard';

interface PrivateRouteProps {
    children: any;
    redirectTo: string;
}

const PrivateRoute = ({ children, redirectTo }: PrivateRouteProps) => {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute redirectTo="/">
                        <Dashboard />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
}
