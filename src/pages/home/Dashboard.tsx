import { useEffect, useContext } from 'react';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { PageTitle } from '../../components/Pagetitle';
import { House } from 'phosphor-react';

export function Dashboard() {
    const { isMenuVisible } = useContext(AuthContext);

    return (
        <div
            className={`grid ${isMenuVisible ? 'grid-areas-layout-a' : 'grid-areas-layout-b'}     ${
                isMenuVisible ? 'grid-cols-6' : 'grid-cols-1'
            } grid-rows-2`}
        >
            {isMenuVisible ? <Menu /> : null}
            <main className="grid-in-main bg-white p-5">
                <PageTitle main="Dashboard" sub="Base de Conhecimento" icon={<House size={32} />} />
                <div className="flex justify-between flex-wrap"></div>
            </main>
            <Footer />
        </div>
    );
}
