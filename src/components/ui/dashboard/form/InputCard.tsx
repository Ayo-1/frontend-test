import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface InputCardProps {
    title: string;
    type: string;
    action: () => void;
    children: ReactNode;
}

const InputCard: React.FC<InputCardProps> = ({ title, type, action, children }) => {
    const [isInputVisible, setInputVisible] = useState(true);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
        <div className="rounded-2xl p-4 bg-gray-one" ref={dropdownRef}>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setInputVisible(!isInputVisible)}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        <svg
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-200 ${isInputVisible ? 'rotate-180' : ''}`}
                        >
                            <path
                                d="M4.5 7.25L9 11.75L13.5 7.25"
                                stroke="#656565"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <span className="font-semibold text-gray-700 text-md">{title}</span>
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-white text-gray-badge">{type}</span>
                </div>

                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                                <path d="M4.16667 8.83334C3.25 8.83334 2.5 9.58334 2.5 10.5C2.5 11.4167 3.25 12.1667 4.16667 12.1667C5.08333 12.1667 5.83333 11.4167 5.83333 10.5C5.83333 9.58334 5.08333 8.83334 4.16667 8.83334Z" fill="#292D32" />
                                <path d="M15.8332 8.83334C14.9165 8.83334 14.1665 9.58334 14.1665 10.5C14.1665 11.4167 14.9165 12.1667 15.8332 12.1667C16.7498 12.1667 17.4998 11.4167 17.4998 10.5C17.4998 9.58334 16.7498 8.83334 15.8332 8.83334Z" fill="#292D32" />
                                <path d="M10.0002 8.83334C9.0835 8.83334 8.3335 9.58334 8.3335 10.5C8.3335 11.4167 9.0835 12.1667 10.0002 12.1667C10.9168 12.1667 11.6668 11.4167 11.6668 10.5C11.6668 9.58334 10.9168 8.83334 10.0002 8.83334Z" fill="#292D32" />
                            </g>
                        </svg>

                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-border rounded-md z-10">
                            <button
                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => {
                                    action();
                                    setDropdownOpen(false)
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            </div>


            {isInputVisible && <div className='bg-white p-4 rounded-xl mt-4'>
                {children}
            </div>}
        </div>
    );
};

export default InputCard;
