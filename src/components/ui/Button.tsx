import { ReactNode } from 'react';
type ButtonProps = {
    children: ReactNode;
};

export function Button({ children, ...rest }: ButtonProps) {
    return (
        <button
            className="transition hover:duration-300 bg-sky-800 py-1 px-4 text-white self-end rounded-sm hover:bg-sky-600"
            {...rest}
        >
            <a>{children}</a>
        </button>
    );
}
