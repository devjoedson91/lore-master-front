import './styles/global.css';
import { Header } from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

export function App() {
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
