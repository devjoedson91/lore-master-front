import { FormEvent, useContext, useEffect, useState } from 'react';
import logo from '../assets/logo-login.png';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export function SignUp() {
    const navigate = useNavigate();

    const { isAuthenticated, signUp } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [navigate, isAuthenticated]);

    async function handleSignUp(event: FormEvent) {
        event.preventDefault();

        if (name === '' || email === '' || password === '') {
            toast.warning('Preencha todos os campos de login');
            return;
        }

        let data = { name, email, password };

        await signUp(data);

        navigate('/');
    }

    return (
        <div className="w-screen h-screen grid place-content-center">
            <div className="rounded-lg bg-white w-80 shadow-md flex items-center justify-center flex-col px-8 py-6 gap-6">
                <img src={logo} alt="knowledge" width={100} />
                <label className="block font-inter font-bold" htmlFor="cadastro">
                    Cadastro
                </label>
                <form onSubmit={handleSignUp} className="w-full flex flex-col gap-1">
                    <Input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        autoFocus={true}
                        id="cadastro"
                    />
                    <Input
                        type="text"
                        placeholder="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Button>Cadastrar</Button>
                </form>
                <a className="cursor-pointer" onClick={() => navigate('/')}>
                    <span className="font-inter text-xs font-medium text-green-700 hover:text-green-500">
                        Já tem cadastro? Acesse o Login!
                    </span>
                </a>
            </div>
        </div>
    );
}
