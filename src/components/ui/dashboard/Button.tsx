import React, { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    title: string;
    svg?: ReactNode;
}


const Button: React.FC<ButtonProps> = ({ className, title, svg, ...props }) => {
    return (
        <button
            className={`flex items-center justify-center font-semibold whitespace-nowrap gap-2 bg-blue-btn py-3.5 px-5  mx-auto text-sm rounded-[13px] cursor-pointer ${className}`}
            type="button" {...props} >
            {svg ? svg : ''}
            {title}
        </button>
    );
}

export default Button;
