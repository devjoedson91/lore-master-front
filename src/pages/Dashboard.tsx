import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';

export function Dashboard() {
    return (
        <div className="grid grid-areas-layout grid-cols-6 grid-rows-2">
            <Menu />
            <main className="grid-in-main bg-white">main</main>
            <Footer />
        </div>
    );
}
