import { FormEvent, useContext, useEffect, useState } from 'react';
import logo from '../assets/logo-login.png';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

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
                    <Input
                        type="text"
                        placeholder="Email"
                        id="login"
                        value={email}
                        autoFocus={true}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Button>Entrar</Button>
                </form>
                <a className="cursor-pointer" onClick={() => navigate('/signup')}>
                    <span className="font-inter text-xs font-medium text-green-700 hover:text-green-500">
                        Não tem cadastro? Registre-se aqui!
                    </span>
                </a>
            </div>
        </div>
    );
}
