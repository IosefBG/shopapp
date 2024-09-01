import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser, faCog, faSignOutAlt, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div style={{
            width: isExpanded ? '250px' : '80px', // Adjusted collapsed width
            height: '100vh',
            backgroundColor: '#2C3E50',
            padding: '20px',
            boxSizing: 'border-box',
            borderRight: '1px solid #1C2833',
            transition: 'width 0.3s ease',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{flex: 1}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <SidebarItem icon={faHome} label="Home" isExpanded={isExpanded}/>
                    <SidebarItem icon={faUser} label="Profile" isExpanded={isExpanded}/>
                    <SidebarItem icon={faCog} label="Settings" isExpanded={isExpanded}/>
                    <SidebarItem icon={faSignOutAlt} label="Logout" isExpanded={isExpanded}/>
                </div>
            </div>
            <button
                onClick={toggleSidebar}
                style={{
                    alignSelf: 'center',
                    marginTop: 'auto',
                    backgroundColor: '#1ABC9C',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '10px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                }}
            >
                <FontAwesomeIcon icon={isExpanded ? faChevronLeft : faChevronRight}/>
            </button>
        </div>
    );
};

const SidebarItem = ({icon, label, isExpanded}) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
            position: 'relative',
            backgroundColor: '#34495E',
            borderRadius: '5px',
            padding: '10px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
        }}>
            <FontAwesomeIcon icon={icon}
                             style={{fontSize: '24px', color: '#ECF0F1', marginRight: isExpanded ? '15px' : '0'}}/>
            {isExpanded && (
                <span style={{
                    fontSize: '16px',
                    color: '#ECF0F1',
                    whiteSpace: 'nowrap'
                }}>{label}</span>
            )}
            {!isExpanded && (
                <span style={{
                    position: 'absolute',
                    left: '100%',
                    top: '50%',
                    transform: 'translateX(10px) translateY(-50%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    backgroundColor: '#333',
                    color: '#fff',
                    padding: '5px',
                    borderRadius: '5px',
                    whiteSpace: 'nowrap'
                }}>
          {label}
        </span>
            )}
        </div>
    );
};

export default Sidebar;
