import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser, faCog, faSignOutAlt, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.css';
import {faSun} from "@fortawesome/free-solid-svg-icons/faSun";
import {faMoon} from "@fortawesome/free-solid-svg-icons/faMoon";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons/faEllipsisV"; // Import the CSS module

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            {/* Sidebar with Navigation Items */}
            <div className={`${styles.sidebar} ${isExpanded ? '' : styles.collapsed}`}>
                <div className={styles.sidebarItemsContainer}>
                    <SidebarItem icon={faHome} label="Home" isExpanded={isExpanded}/>
                    <SidebarItem icon={faUser} label="Profile" isExpanded={isExpanded}/>
                    <SidebarItem icon={faCog} label="Settings" isExpanded={isExpanded}/>
                    <SidebarItem icon={faSignOutAlt} label="Logout" isExpanded={isExpanded}/>
                </div>
                {/* Separator Line */}
                <div className={styles.separator}></div>

                {/* User Section */}
                <div className={styles.userArea}>
                    {/* User Image */}
                    <div className={styles.userImage}></div>

                    {/* User Info */}
                    <div className={styles.userInfo}>
                        <h3 className={styles.userName}>Marcel</h3>
                        <h5 className={styles.userEmail}>marcel@yahoo.com</h5>
                    </div>

                    {/* User Options (Three Dots Icon) */}
                    <div className={styles.userOptions}>
                        <FontAwesomeIcon icon={faEllipsisV}/>
                    </div>
                </div>
                <button onClick={toggleSidebar}
                        className={`${styles.sidebarButton} ${isExpanded ? '' : styles.collapsed}`}>
                    <FontAwesomeIcon icon={isExpanded ? faChevronLeft : faChevronRight}/>
                </button>
            </div>
        </>
    );
};

const SidebarItem = ({icon, label, isExpanded}) => {
    return (
        <div className={styles.sidebarItem}>
            <FontAwesomeIcon
                icon={icon}
                className={styles.sidebarItemIcon}
                style={{marginRight: isExpanded ? '15px' : '0'}}
            />
            {isExpanded && <span className={styles.sidebarItemLabel}>{label}</span>}
            {!isExpanded && (
                <span className={styles.sidebarItemTooltip}>{label}</span>
            )}
        </div>
    );
};

export default Sidebar;
