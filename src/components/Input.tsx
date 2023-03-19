interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    autoFocus?: boolean;
    id?: string;
    onChange: (event: { target: HTMLInputElement }) => void;
}

export function Input({ type, placeholder, value, autoFocus, id, onChange }: InputProps) {
    return (
        <input
            type={type}
            className="font-inter mb-4 h-10 p-4 border-2 border-gray-300 rounded-sm text-sm shadow-sm placeholder-slate-600 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 focus:border-2  bg-body"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoFocus={autoFocus}
            id={id}
        />
    );
}
