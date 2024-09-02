import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "../components/navbar/Navbar.tsx"; // Allows rendering of nested routes

const UsersLayout: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1, padding: '20px' }}>
                <Outlet /> {/* This will render the nested routes */}
            </main>
        </div>
    );
};

export default UsersLayout;
