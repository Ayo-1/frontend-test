import React from 'react';

interface ModalProps {
    onClose: () => void;
}

const CloseBtn: React.FC<ModalProps> = ({ onClose, }) => {
    return (

        <button type="button" onClick={onClose} className="outline-none h-6 w-6 rounded-full ml-auto hover:border-primary-500 flex items-center justify-center">
            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width={24} height={24} rx={12} fill="white" stroke="#8E8E8E" />
                <path d="M16.25 8.75L8.75 16.25" stroke="#8E8E8E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.75 8.75L16.25 16.25" stroke="#8E8E8E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>

    );
};

export default CloseBtn;
