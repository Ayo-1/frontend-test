import React, { ChangeEvent, ReactNode } from 'react';

interface InputProps {
    name: string;
    placeholder: string;
    type?: string;
    svg?: ReactNode;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    action?: () => void;
    value?: string;
}

const Input: React.FC<InputProps> = ({ name, placeholder, type = "text", svg, action, ...props }) => {
    return (
        <div className="w-full mt-4 first:mt-0">
            <div className="relative flex items-center h-13">
                <input
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    className="input-field h-full w-full focus:placeholder-hidden  py-4 border border-gray-border bg-white rounded-[13px] text-sm text-black px-4 sm:px-5  focus:border-blue-border focus:outline-none peer"
                    {...props}
                />
                <label
                    htmlFor={name}
                    className="absolute left-4 text-sm text-placeholder transition-all peer-placeholder-shown:top-3 top-[-5px] peer-placeholder-shown:text-base peer-placeholder-shown:transform peer-focus:top-[-7px] peer-focus:px-1 per peer-focus:text-xs hidden peer-focus:inline peer-focus:text-black peer-focus:bg-white peer-focus:transform"
                >
                    {placeholder}
                </label>

                {action && <button
                    type="button"
                    onClick={action}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 rounded-full bg-gray-one p-2 bg-transparent border-none cursor-pointer"
                >
                    {svg ? svg : <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 3.98667C11.78 3.76667 9.54667 3.65334 7.32 3.65334C6 3.65334 4.68 3.72 3.36 3.85334L2 3.98667" stroke="#747478" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.66663 3.31333L5.81329 2.44C5.91996 1.80666 5.99996 1.33333 7.12663 1.33333H8.87329C9.99996 1.33333 10.0866 1.83333 10.1866 2.44666L10.3333 3.31333" stroke="#747478" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.5667 6.09334L12.1334 12.8067C12.06 13.8533 12 14.6667 10.14 14.6667H5.86002C4.00002 14.6667 3.94002 13.8533 3.86668 12.8067L3.43335 6.09334" stroke="#747478" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.88672 11H9.10672" stroke="#747478" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.33337 8.33333H9.66671" stroke="#747478" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>}

                </button>}
            </div>
        </div>
    );
};

export default Input;
