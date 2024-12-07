import React, { useEffect, useRef, useState } from 'react';

interface DropDownProps {
    name: string;
    placeholder: string;
    options: { value: string; label: string, id: number }[];
    value?: string;
    onChange?: (value: string) => void;
}

const Dropdown: React.FC<DropDownProps> = ({ name, placeholder, options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const handleSelect = (optionValue: string) => {
        onChange && onChange(optionValue);
        setIsOpen(false);
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
        <div className="relative w-full mt-4" ref={dropdownRef}>

            <button
                type="button"
                className={`w-full py-4 px-4 border rounded-[13px] text-left text-sm bg-white ${isOpen ? 'border-blue-border' : 'border-gray-border'
                    } focus:outline-none peer`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`${isOpen ? "text-transparent" : ""}`}>{value
                    ? value
                    : placeholder}</span>


            </button>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 rounded-full bg-gray-one p-2 bg-transparent border-none cursor-pointer"
            >
                <svg className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0201 5.31311C12.8425 5.1356 12.5648 5.11946 12.369 5.2647L12.313 5.31311L7.99984 9.626L3.68672 5.31311C3.50921 5.1356 3.23144 5.11946 3.0357 5.2647L2.97962 5.31311C2.8021 5.49062 2.78597 5.7684 2.9312 5.96414L2.97962 6.02022L7.64628 10.6869C7.82379 10.8644 8.10157 10.8805 8.29731 10.7353L8.35339 10.6869L13.0201 6.02022C13.2153 5.82496 13.2153 5.50837 13.0201 5.31311Z" fill="#747478" />
                </svg>

            </button>

            <label
                htmlFor={name}
                className={`absolute left-4 text-sm text-placeholder transition-all ${isOpen ? "" : "hidden"} ${isOpen
                    ? 'top-[-7px] text-xs bg-white px-1 text-black'
                    : 'top-3 text-base'
                    } peer-focus:top-[-7px] peer-focus:text-xs peer-focus:text-black peer-focus:bg-white peer-focus:px-1`}
            >
                {placeholder}
            </label>


            {isOpen && (
                <ul className="absolute w-full mt-1 divide-y divide-gray-border bg-white border border-gray-border rounded-[13px] shadow-lg z-10">
                    {options.map((option) => (
                        <li
                            key={option.label}
                            onClick={() => handleSelect(option.label)}
                            className={`px-4 py-3 text-sm cursor-pointer hover:bg-gray-100 ${value === option.value ? 'bg-gray-100 font-semibold' : ''
                                }`}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
