import React from 'react';
import CloseBtn from './CloseBtn';

interface ModalProps {
    title?: string;
    onClose: () => void;
}

const ModalHeader: React.FC<ModalProps> = ({ title, onClose }) => {
    return (
        <div className="bg-gray-three w-full flex items-center justify-between py-5 px-8 rounded-t-3xl">
            <h4 className="text-black text-left text-lg font-semibold">{title}</h4>
            <CloseBtn onClose={onClose} />
        </div>

    );
};

export default ModalHeader;
