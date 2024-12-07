import React, { ChangeEvent } from 'react';

interface InputProps {
    title: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    action?: () => void;
    value?: string;
    checked: boolean;
    id: number;
}

const RequiredSwitch: React.FC<InputProps> = ({ title, action, checked, id, ...props }) => {
    return (
        <div className="my-2 flex items-center justify-between text-sm mt-2">
            <p>{title}</p>
            <input
                type="checkbox"
                checked={checked}
                onChange={action}
                id={`switch-${id}`}
                className="hidden"
            />
            <label
                htmlFor={`switch-${id}`}
                className="flex items-center cursor-pointer">

                <div className="relative">
                    <div className={`w-12 h-6 ${checked ? "bg-green-toggle" : "bg-gray-two"} rounded-full transition-all duration-300 ease-in-out`}>
                        <div
                            className={`w-6 h-6 bg-white border-2 ${checked ? "border-green-toggle" : "border-gray-two"} rounded-full transition-transform duration-300 ease-in-out ${checked ? "transform translate-x-6" : ""
                                }`}
                        />
                    </div>
                </div>
            </label>


        </div>
    );
};

export default RequiredSwitch;
