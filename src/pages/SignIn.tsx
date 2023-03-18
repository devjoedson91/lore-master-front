import { FormEvent, useContext, useEffect, useState } from 'react';
import logo from '../assets/logo-login.png';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

export function SignIn() {
    const navigate = useNavigate();

    const { isAuthenticated, signIn } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [navigate, isAuthenticated]);

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        if (email === '' || password === '') {
            toast.warning('Preencha todos os campos de login');
            return;
        }

        let data = { email, password };

        await signIn(data);

        navigate('/dashboard');
    }

    return (
        <div className="w-screen h-screen grid place-content-center">
            <div className="rounded-lg bg-white w-80 shadow-md flex items-center justify-center flex-col px-8 py-6 gap-6">
                <img src={logo} alt="knowledge" width={100} />
                <label className="block font-inter font-bold" htmlFor="login">
                    Login
                </label>
                <form onSubmit={handleLogin} className="w-full flex flex-col gap-1">
                    <input
                        type="text"
                        className="font-inter mb-4 h-10 p-4 border-2 rounded-sm text-sm shadow-sm placeholder-slate-600 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 focus:border-2  bg-gray-400"
                        placeholder="Email"
                        id="login"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus={true}
                    />
                    <input
                        type="password"
                        className="mb-4 h-10 p-4 border-2 rounded-sm text-sm shadow-sm placeholder-slate-600 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 focus:border-2 auto bg-gray-400"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="bg-sky-800 py-1 px-4 text-white self-end rounded-sm hover:bg-sky-600"
                        onClick={handleLogin}
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}
