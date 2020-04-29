import { useState } from 'react';
import Navbar from './Navbar';
import TopDrawer from './TopDrawer';

import style from '../sass/Layout.module.scss';
import Footer from './Footer';

const Layout = (props) => {

    const [ drawerOpen, setDrawerOpen ] = useState(false);

    const drawerToggleHandler = () => {
        setDrawerOpen(prevState => setDrawerOpen(!prevState.drawerOpen));
    };
    const backdropClickHandler = () => {
        setDrawerOpen(false);
    };

    // let topDrawer = drawerOpen ? <TopDrawer backdropClickHandler={backdropClickHandler} /> : null;

    return (
        <div className={style.MainLayout}>
            <TopDrawer show={drawerOpen} backdropClickHandler={backdropClickHandler} />
            <Navbar drawerToggleHandler={drawerToggleHandler} />
            <div className={style.Content}>{props.children}</div>
            <Footer />
        </div>
    );
};

export default Layout;