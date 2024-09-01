import React from 'react';
import { Outlet } from 'react-router-dom'; // Allows rendering of nested routes
// @ts-ignore
import Navbar from '@/components/navbar/Navbar'; // Adjust the path as needed

const UsersLayout: React.FC = () => {
    const isAuthenticated = false
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Navbar isAuthenticated={isAuthenticated} />
            <main style={{ flex: 1, padding: '20px' }}>
                <Outlet /> {/* This will render the nested routes */}
            </main>
        </div>
    );
};

export default UsersLayout;
