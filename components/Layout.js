import { useState } from 'react';
import Navbar from './Navbar';
import TopDrawer from './TopDrawer';

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
        <div className="MainLayout">
            <TopDrawer show={drawerOpen} backdropClickHandler={backdropClickHandler} />
            <Navbar drawerToggleHandler={drawerToggleHandler} />
            <div className="Content">{props.children}</div>
            <Footer />

            <style jsx>{`
                /*  For Mobile */
                .MainLayout .Content {
                        height: 80vh;
                        width: 90vw;
                        margin: 2vh 5vw;
                        background: red;
                }

                /* For Desktop */
                @media only screen and (min-width: 900px) {
                    .MainLayout {
                        width: 75%;
                        margin: 1% 10%;
                    }

                    .MainLayout .Content {
                                height: 75vh;
                                width: 55vw;
                                margin: 0 12.5%;
                                background: red;
                    }
                }
            `}</style>
        </div>
    );
};

export default Layout;