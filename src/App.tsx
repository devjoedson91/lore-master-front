import './styles/global.css';
import { Header } from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AuthContext } from './contexts/AuthContext';
import { useContext } from 'react';
import { Loading } from './components/Loading';

export function App() {
    const { loadingAuth } = useContext(AuthContext);

    if (loadingAuth) {
        return <Loading />;
    }

    return (
        <BrowserRouter>
            <AuthProvider>
                <Header />
                <AppRoutes />
                <ToastContainer autoClose={3000} />
            </AuthProvider>
        </BrowserRouter>
    );
}
