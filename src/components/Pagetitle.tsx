import { ReactNode } from 'react';

type PageTitleProps = {
    main: string;
    sub: string;
    icon: ReactNode;
};

export function PageTitle({ main, sub, icon }: PageTitleProps) {
    return (
        <div>
            <h1 className="flex text-[25px] items-center gap-1 font-medium font-inter m-0">
                <div>{icon}</div>
                {main}
            </h1>
            <h2 className="text-gray-500 mt-[5px] text-sm font-inter mb-2">{sub}</h2>
            <hr className="bg-gray-300 h-[2px]" />
        </div>
    );
}
