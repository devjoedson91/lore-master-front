import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-login.png';

export function SignIn() {
    function handleLogin(event: FormEvent) {
        event.preventDefault();
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
                        className="font-inter mb-4 h-10 p-4 border-2 border-slate-300 rounded-sm text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 auto"
                        placeholder="Email"
                        id="login"
                    />
                    <input
                        type="password"
                        className="mb-4 h-10 p-4 border-2 border-slate-300 rounded-sm text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 auto"
                        placeholder="Senha"
                    />
                    <Link
                        to="/dashboard"
                        className="bg-accessBtn py-1 px-4 text-white self-end rounded-sm hover:bg-sky-600"
                    >
                        Entrar
                    </Link>
                </form>
            </div>
        </div>
    );
}
