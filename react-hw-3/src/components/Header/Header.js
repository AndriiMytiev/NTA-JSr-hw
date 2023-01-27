import React from 'react';
import styles from './Header.module.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <NavLink to='/'>Products</NavLink>
                <NavLink to='/favorites'>Favorites</NavLink>
                <NavLink to='/cart'>Cart</NavLink>
            </div>
        </div>
    );
};

export default Header;