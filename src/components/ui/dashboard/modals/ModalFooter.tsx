import React from 'react';
import Button from '../Button';

interface ModalProps {
    title?: string;
    backAction: () => void;
    forwardAction: () => void;
}

const ModalFooter: React.FC<ModalProps> = ({ title, backAction, forwardAction }) => {
    return (
        <div className="border-t border-gray-two w-full gap-5  grid  grid-cols-2 flex items-center justify-between py-4 px-8">
            <Button title='Back' onClick={backAction} className='w-full py-5 text-blue-btn bg-white border border-blue-btn' />

            <Button title='Add Component' onClick={forwardAction} className='w-full py-5 text-white' />
        </div>

    );
};

export default ModalFooter;
