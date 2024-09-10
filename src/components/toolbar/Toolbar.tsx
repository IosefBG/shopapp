import styles from "../toolbar/Toolbar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun} from "@fortawesome/free-solid-svg-icons/faSun";
import {faMoon} from "@fortawesome/free-solid-svg-icons/faMoon";
import React, {useState} from "react";

const Toolbar = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        // Additional logic to change the theme can go here
    };

    {/* Toolbar with Search and Theme Change Icon */
    }

    return (
        <div className={styles.toolbar}>
            <div className={styles.toolbarSearch}>
                <input type="text" placeholder="Search..."/>
            </div>
            <div className={styles.toolbarIcon} onClick={toggleTheme}>
                <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon}/>
            </div>
        </div>
    )
}

export default Toolbar;