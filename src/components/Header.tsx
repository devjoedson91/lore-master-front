import { useState, useContext } from 'react';
import { CaretLeft, CaretDown } from 'phosphor-react';
import { UseDropdown } from './UseDropdown';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

export function Header() {
    const { isAuthenticated, isMenuVisible, toggleMenu } = useContext(AuthContext);

    return (
        <header className="w-screen h-[8vh] bg-gradient-to-r from-green-700 to-green-500 flex items-center justify-between grid-in-header">
            {isAuthenticated ? (
                <a
                    className="w-[60px] h-full text-white flex justify-center items-center  hover:bg-green-600"
                    onClick={toggleMenu}
                >
                    {isMenuVisible ? <CaretDown size={20} /> : <CaretLeft size={20} />}
                </a>
            ) : (
                <a></a>
            )}
            <Link to="/dashboard">
                <h1 className="font-inter text-white">Lore - Knowledge</h1>
            </Link>
            {isAuthenticated ? <UseDropdown /> : <a></a>}
        </header>
    );
}
