import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faCog, faSignOutAlt, faSignInAlt, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';
import {useAuth} from "../../contexts/AuthContext.tsx"; // Import the CSS module


const Navbar: React.FC = () => {
    const {isAuthenticated, user, logout} = useAuth();
    return (
        <nav className={styles.navbar}>
            <div className={styles.navItems}>
                <Link to="/" className={styles.navLink} data-tooltip="Home">
                    <FontAwesomeIcon icon={faHome}/>
                </Link>
                <Link to="/settings" className={styles.navLink} data-tooltip="Settings">
                    <FontAwesomeIcon icon={faCog}/>
                </Link>
            </div>
            <div>
                {isAuthenticated ? (
                    <>
                        <Link to="/admin" className={styles.button}>
                            <FontAwesomeIcon icon={faSignInAlt}/> Admin
                        </Link>
                        <Link to="/profile" className={styles.button}>
                            <FontAwesomeIcon icon={faSignInAlt}/> Profile
                        </Link>
                        <button onClick={logout} className={styles.button}>
                            <FontAwesomeIcon icon={faSignOutAlt}/> Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className={styles.button}>
                            <FontAwesomeIcon icon={faSignInAlt}/> Login
                        </Link>
                        <Link to="/register" className={styles.button}>
                            <FontAwesomeIcon icon={faUserPlus}/> Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
