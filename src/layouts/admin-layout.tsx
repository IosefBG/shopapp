// AdminLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from "../components/sidebar/Sidebar.tsx";
import Toolbar from "../components/toolbar/Toolbar.tsx"; // Make sure the Toolbar component is imported

const AdminLayout: React.FC = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}> {/* Flex container for sidebar and main content */}
            <Sidebar /> {/* Sidebar remains on the left */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}> {/* Flex container for toolbar and main content */}
                <Toolbar /> {/* Toolbar at the top */}
                <main style={{ flex: 1, overflow: 'auto' }}> {/* Main content takes remaining space */}
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
