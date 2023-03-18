import { useState, useContext } from 'react';
import { CaretLeft, CaretDown } from 'phosphor-react';
import { UseDropdown } from './UseDropdown';
import { AuthContext } from '../contexts/AuthContext';

export function Header() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    const { isAuthenticated } = useContext(AuthContext);

    function toggleMenu() {
        setMenuIsVisible(!menuIsVisible);
    }

    return (
        <header className="w-screen h-[8vh] bg-gradient-to-r from-green-700 to-green-500 flex items-center justify-between grid-in-header">
            {isAuthenticated ? (
                <a
                    className="w-[60px] h-full text-white self-start flex justify-center items-center hover:bg-green-600"
                    onClick={toggleMenu}
                >
                    {menuIsVisible ? <CaretDown size={20} /> : <CaretLeft size={20} />}
                </a>
            ) : (
                <a></a>
            )}
            <h1 className="font-inter text-white">Lore - Knowledge</h1>
            {isAuthenticated ? <UseDropdown /> : <a></a>}
        </header>
    );
}
