import { useEffect, useContext } from 'react';
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export function Dashboard() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className="grid grid-areas-layout grid-cols-6 grid-rows-2">
            <Menu />
            <main className="grid-in-main bg-white"></main>
            <Footer />
        </div>
    );
}
