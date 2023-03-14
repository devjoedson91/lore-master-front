import { useState } from 'react';
import { CaretLeft, CaretDown } from 'phosphor-react';
import { UseDropdown } from './UseDropdown';

export function Header() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    function toggleMenu() {
        setMenuIsVisible(!menuIsVisible);
    }

    return (
        <header className="w-screen h-[8vh] bg-gradient-to-r from-green-700 to-green-500 flex items-center justify-between grid-in-header">
            <a
                className="w-[60px] h-full text-white self-start flex justify-center items-center"
                onClick={toggleMenu}
            >
                {menuIsVisible ? <CaretDown size={20} /> : <CaretLeft size={20} />}
            </a>
            <h1 className="font-inter text-white">Lore - Knowledge</h1>
            <UseDropdown />
        </header>
    );
}
