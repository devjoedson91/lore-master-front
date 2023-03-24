import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { CaretDown, Gear, SignOut } from 'phosphor-react';
import Gravatar from 'react-gravatar';
import { useNavigate } from 'react-router-dom';

export function UseDropdown() {
    const navigate = useNavigate();

    const { logOut, user } = useContext(AuthContext);

    return (
        <div className="group relative h-full hover:bg-green-600">
            <div className="flex items-center text-white font-thin h-full py-0 px-5">
                <span>{`Bem vindo(a), ${user.name}`}</span>
                <div className="my-0 mx-3 max-w-[37px]">
                    <Gravatar email={user.email} alt="user" style={{ borderRadius: 5 }} />
                </div>
                <CaretDown size={15} color="#fff" />
            </div>
            <div className="group-hover:visible group-hover:opacity-100 absolute right-0 bg-white min-w-[170px] shadow-md p-2 z-[1] flex flex-col flex-wrap gap-1 invisible opacity-0 transition duration-[0.5s]">
                <a
                    className="flex items-center gap-2 cursor-pointer py-2 px-1 rounded-md hover:bg-gray-100"
                    onClick={() => navigate('/admin')}
                >
                    <Gear size={20} /> Administração
                </a>
                <a
                    className="flex items-center gap-2 cursor-pointer py-2 px-1 rounded-md hover:bg-gray-200"
                    onClick={logOut}
                >
                    <SignOut size={20} /> Sair
                </a>
            </div>
        </div>
    );
}
