import { ReactNode } from 'react';
type ButtonProps = {
    children: ReactNode;
    variant: string;
    variantHover?: string;
    onClick?: () => void;
};

export function Button({ children, variant, variantHover, onClick }: ButtonProps) {
    return (
        <button
            className={`transition hover:duration-300 ${variant} py-1 px-4 text-white self-end rounded-sm ${variantHover}`}
            onClick={onClick}
        >
            <a>{children}</a>
        </button>
    );
}
