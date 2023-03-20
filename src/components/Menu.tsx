import { useContext, useEffect } from 'react';
import { MagnifyingGlass } from 'phosphor-react';
import { AuthContext } from '../contexts/AuthContext';

export function Menu() {
    return (
        <aside className="flex flex-col flex-wrap grid-in-aside bg-gradient-to-r from-gray-900 to-gray-700">
            <div className="flex justify-center items-center m-5 p-2 border-b-2 border-gray-500">
                <MagnifyingGlass size={32} color="#ccc" className="mr-3" />
                <input
                    type="text"
                    className="bg-transparent w-full outline-0 border-0 text-base text-gray-300"
                    placeholder="Digite para filtrar..."
                />
            </div>
        </aside>
    );
}
