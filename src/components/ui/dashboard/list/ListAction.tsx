import React from 'react';

interface ModalProps {
    action?: () => void;
}

const ListAction: React.FC<ModalProps> = ({ action, }) => {
    return (

        <button type="button" onClick={action} disabled={action ? false : true} className="outline-none p-3 bg-gray-one rounded-full ml-autoflex items-center justify-center">
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7.99994H12" stroke="#747478" strokeWidth="1.32" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 4L12 8L8 12" stroke="#747478" strokeWidth="1.32" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </button>

    );
};

export default ListAction;
