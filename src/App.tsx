import './styles/global.css';
import { Header } from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';

export function App() {
    return (
        <BrowserRouter>
            <Header />
            <Router />
        </BrowserRouter>
    );
}
