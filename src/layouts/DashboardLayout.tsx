import React, { ReactNode } from 'react';
import Sidebar from '../components/partials/Sidebar';
import Header from '../components/partials/Header';

interface DashboardLayoutProps {
    children: ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <main className="flex">
            <Sidebar />
            <section className="w-full md:w-[81%] h-screen flex flex-col">
                <Header />
                <div className="p-4 sm:p-6 flex-2 h-full">
                    {children}
                </div>
            </section>
        </main>
    );
}

export default DashboardLayout;
