import React from 'react';
import TopButton from '../ui/sidebar/TopButton';
import Avatar from '../ui/sidebar/Avatar';


export default function Sidebar() {
    return (
        <aside className="w-[19%] h-screen bg-white border-e border-gray-border hidden md:block">
            <div className="relative flex flex-col h-full max-h-full">
                <div className="px-6 pt-4">
                    <TopButton>
                    <Avatar initials='S' />
                    <h5 className="text-sm text-black font-bold">Silas Shoe Store</h5>
                    </TopButton>
                </div>
                <div className="h-full overflow-y-auto">
                   
                </div>
                
            </div>
        </aside>

    );
}
