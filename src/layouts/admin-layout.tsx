// src/layouts/AdminLayout.tsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Drawer, IconButton, Box, CssBaseline, AppBar, Toolbar, Typography, Tooltip, Avatar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faHome, faUser, faCog, faSignOutAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './AdminLayout.module.css';
import {useAuth} from "../contexts/AuthContext.tsx";

const drawerWidth = 240;

const AdminLayout: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const { user } = useAuth();

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Admin Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                open={isExpanded}
                sx={{
                    width: isExpanded ? drawerWidth : 85,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: isExpanded ? drawerWidth : 85,
                        transition: 'width 0.3s',
                    },
                }}
            >
                <SidebarContent isExpanded={isExpanded} toggleSidebar={toggleSidebar} user={user} />
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, overflow: 'auto' }}>
                <Outlet />
            </Box>
        </Box>
    );
};

const SidebarContent = ({ isExpanded, toggleSidebar, user }) => {
    const sidebarItems = [
        { path: '/', icon: faHome, label: 'Go back' },
        { path: '/profile', icon: faUser, label: 'Profile' },
        { path: '/settings', icon: faCog, label: 'Settings' },
        { path: '/logout', icon: faSignOutAlt, label: 'Logout' },
    ];

    const stringToColor = (string) => {
        let hash = 0;
        for (let i = 0; i < string.length; i++) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
        let color = '#';
        for (let i = 0; i < 3; i++) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        return color;
    };

    const stringAvatar = (name) => ({
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}`,
    });

    return (
        <Box className={styles.sidebar}>
            <Box className={styles.sidebarItemsContainer}>
                {sidebarItems.map((item) => (
                    <Tooltip key={item.label} title={!isExpanded ? item.label : ''} placement="right">
                        <Link to={item.path} className={styles.sidebarItem}>
                            <FontAwesomeIcon icon={item.icon} className={styles.sidebarItemIcon} />
                            {isExpanded && <span className={styles.sidebarItemLabel}>{item.label}</span>}
                        </Link>
                    </Tooltip>
                ))}
            </Box>

            <IconButton onClick={toggleSidebar} className={styles.sidebarButton}>
                <FontAwesomeIcon icon={isExpanded ? faChevronLeft : faChevronRight} />
            </IconButton>

            <Box className={styles.userArea}>
                <Avatar {...stringAvatar(user.username)} style={{ marginRight: '10px' }} />
                {isExpanded && (
                    <>
                        <Box className={styles.userInfo}>
                            <Typography className={styles.userName}>{user.username}</Typography>
                            <Typography className={styles.userEmail}>{user.email}</Typography>
                        </Box>
                        <FontAwesomeIcon icon={faEllipsisV} className={styles.userOptions} />
                    </>
                )}
            </Box>
        </Box>
    );
};

export default AdminLayout;
