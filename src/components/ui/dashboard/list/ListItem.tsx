import React, { ReactNode } from 'react';
import ListAction from './ListAction';

interface ModalProps {
    action?: () => void;
    title: string;
    description: string;
    svg: ReactNode;
    background: string;
}

const ListItem: React.FC<ModalProps> = ({ action, title, description, svg, background }) => {
    return (

        <div className="flex gap-x-4 py-4 items-center first:pt-0 last:pb-0">
            <span className={`inline-flex items-center justify-center p-4 text-sm font-semibold leading-none rounded-full`} style={{ backgroundColor: background }}>
                {svg}
            </span>
            <div className="grow flex justify-between items-center">
                <div className='grow gap-1'>
                    <h3 className="font-semibold text-gray-800">
                        {title}
                    </h3>
                    <p className='text-[#656565] text-xs md:text-sm'>{description}</p>
                </div>
                <ListAction action={action} />
            </div>
        </div>

    );
};

export default ListItem;
