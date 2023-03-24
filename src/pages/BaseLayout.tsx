import { ReactNode, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';

interface ContentProps {
    content: ReactNode;
}

export function BaseLayout({ content }: ContentProps) {
    const { isMenuVisible } = useContext(AuthContext);

    return (
        <div
            className={`grid ${isMenuVisible ? 'grid-areas-layout-a' : 'grid-areas-layout-b'} ${
                isMenuVisible ? 'grid-cols-6' : 'grid-cols-1'
            } grid-rows-2`}
        >
            {isMenuVisible ? <Menu /> : null}
            {content}
            <Footer />
        </div>
    );
}
