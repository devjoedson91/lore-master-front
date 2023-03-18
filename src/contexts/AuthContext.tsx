import { createContext, ReactNode, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/apiClient';

type UserProps = {
    id: string;
    name: string;
    email: string;
    token: string;
};

type SignInProps = {
    email: string;
    password: string;
};

type SignUpProps = {
    name: string;
    email: string;
    password: string;
};

type AuthProviderProps = {
    children: ReactNode;
};

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    logOut: () => void;
    // signUp: (credentials: SignUp) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: '',
        token: '',
    });

    const isAuthenticated = !!user.name;

    useEffect(() => {
        async function getUser() {
            const userInfo = await localStorage.getItem('@lore.token');

            let hasUser: UserProps = JSON.parse(userInfo || '{}');

            if (Object.keys(hasUser).length > 0) {
                api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`;

                setUser({
                    id: hasUser.id,
                    name: hasUser.name,
                    email: hasUser.email,
                    token: hasUser.token,
                });
            }
        }

        getUser();
    }, []);

    async function signIn({ email, password }: SignInProps) {
        try {
            const response = await api.post('/session', { email, password });

            const { id, name, token } = response.data;

            const data = { ...response.data };

            await localStorage.setItem('@lore.token', JSON.stringify(data));

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setUser({ id, name, email, token });

            // api.defaults.headers['authorization'] = `Bearer ${token}`;

            toast.success('Logado com sucesso!');
        } catch (err) {
            toast.error('Erro ao acessar');
            console.log('Erro ao acessar: ', err);
        }
    }

    async function logOut() {
        try {
            await localStorage.removeItem('@lore.token');

            setUser({
                id: '',
                name: '',
                email: '',
                token: '',
            });
        } catch (err) {
            toast.error('Erro ao deslogar');
            throw new Error(`erro ao deslogar: ${err}`);
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}
