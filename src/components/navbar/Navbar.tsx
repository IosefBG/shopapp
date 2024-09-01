import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faSignOutAlt, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css'; // Import the CSS module

interface NavbarProps {
    isAuthenticated: boolean; // Boolean prop to toggle between authenticated and non-authenticated states
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated }) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navItems}>
                <Link to="/" className={styles.navLink} data-tooltip="Home">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                <Link to="/profile" className={styles.navLink} data-tooltip="Profile">
                    <FontAwesomeIcon icon={faUser} />
                </Link>
                <Link to="/settings" className={styles.navLink} data-tooltip="Settings">
                    <FontAwesomeIcon icon={faCog} />
                </Link>
            </div>
            <div>
                {isAuthenticated ? (
                    <button className={styles.button}>
                        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                    </button>
                ) : (
                    <>
                        <Link to="/login" className={styles.button}>
                            <FontAwesomeIcon icon={faSignInAlt} /> Login
                        </Link>
                        <Link to="/register" className={styles.button}>
                            <FontAwesomeIcon icon={faUserPlus} /> Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
