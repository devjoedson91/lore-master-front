import { useEffect, useContext, useState } from 'react';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { PageTitle } from '../../components/Pagetitle';
import { House } from 'phosphor-react';
import { Stat } from './Stat';
import { Folders, Files, Users } from 'phosphor-react';
import { api } from '../../services/apiClient';
import { Spinner } from '../../components/ui/Spinner';

type StatProps = {
    articles: number;
    categories: number;
    users: number;
};

export function Dashboard() {
    const { isMenuVisible } = useContext(AuthContext);
    const [stat, setStat] = useState({} as StatProps);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTotalRecords();
    }, []);

    async function getTotalRecords() {
        setLoading(true);

        try {
            const response = await api.get('/totals');
            setLoading(false);
            setStat(response.data);
        } catch (err) {
            console.log('erro carregar totais: ', err);
        }
    }

    return (
        <div
            className={`grid ${isMenuVisible ? 'grid-areas-layout-a' : 'grid-areas-layout-b'} ${
                isMenuVisible ? 'grid-cols-6' : 'grid-cols-1'
            }`}
        >
            {isMenuVisible ? <Menu /> : null}
            <main className="grid-in-main p-4 h-[calc(100vh-80px)]">
                <PageTitle main="Dashboard" sub="Base de Conhecimento" icon={<House size={40} />} />
                <div className="flex justify-between flex-wrap mt-4">
                    <Stat
                        title="Categorias"
                        value={loading ? <Spinner /> : stat.categories}
                        icon={<Folders size={70} color="#d54d50" />}
                    />
                    <Stat
                        title="Artigos"
                        value={loading ? <Spinner /> : stat.articles}
                        icon={<Files size={70} color="#3bc480" />}
                    />
                    <Stat
                        title="Usuários"
                        value={loading ? <Spinner /> : stat.users}
                        icon={<Users size={70} color="#3282cd" />}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}
