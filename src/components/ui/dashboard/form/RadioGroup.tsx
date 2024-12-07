import React from "react";

interface RadioOption {
    id: number;
    value: string;
    label: string;
}

interface RadioGroupProps {
    name: string;
    options: RadioOption[];
    value?: string;
    id: number;
    onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ name, options, value, id, onChange }) => {
    const handleChange = (selectedValue: string) => {
        onChange(selectedValue);
    };

    return (
        <div className="space-y-3">
            <p className="text-sm text-black font-semibold">{name}</p>
            {options.map((option) => (
                <label
                    key={option.id}
                    htmlFor={`radio_option${id}_${option.id}`}
                    className="flex items-center cursor-pointer gap-2"
                >
                    <input
                        type="radio"
                        id={`radio_option${id}_${option.id}`}
                        name={`option_${id}`}
                        value={value}
                        checked={value !== "" && value === option.label}
                        onChange={() => handleChange(option.label)}
                        className="hidden peer"
                    />
                    <span className="w-5 h-5 rounded-full border-2 border-gray-border bg-gray-one  flex items-center justify-center peer-checked:border-blue-600 peer-checked:bg-gray-two">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-one"></span>
                    </span>
                    <span className="text-sm text-gray-700 peer-checked:text-blue-600">
                        {option.label}
                    </span>
                </label>
            ))}
        </div>
    );
};

export default RadioGroup;
