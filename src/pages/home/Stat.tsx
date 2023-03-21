import { ReactNode } from 'react';

interface StatsProps {
    title: string;
    value: number | ReactNode;
    icon: any;
    color?: string;
}

export function Stat({ title, value, icon, color }: StatsProps) {
    return (
        <div className="flex-1 flex rounded-lg mr-5 mb-5 bg-white p-5 shadow-md border-[1px]">
            <div className="flex items-center">{icon}</div>
            <div className="flex-1 flex flex-col items-end">
                <span className="text-lg font-inter">{title}</span>
                <span className="text-5xl">{value}</span>
            </div>
        </div>
    );
}
