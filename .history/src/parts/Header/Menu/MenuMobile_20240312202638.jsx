import React from 'react';
import styles from './MenuStyles.module.css'
import { useMediaMobile } from '../../../hooks/useMedia';
import { Link } from 'react-router-dom';

const MenuMobile = () => {
    const [isMobile] = useMediaMobile();
    return <>{isMobile && <div className={styles.menuSticky}>
        <Link to={'/'}></Link>
    </div>}</>;
};

export default MenuMobile;