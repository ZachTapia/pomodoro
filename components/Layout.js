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
        <div className="main-layout">
            <TopDrawer show={drawerOpen} backdropClickHandler={backdropClickHandler} />
            <Navbar drawerToggleHandler={drawerToggleHandler} />
            <div className="main-layout__content">
                {props.children}
                <div className="footer--mobile">
                    <Footer />
                </div>
            </div>


            <style jsx>{`
                /*  For Mobile */
                .main-layout .main-layout__content {
                    position: relative;
                    height: 88vh;
                    width: 90vw;
                    margin: 0 5vw;
                    background-color: rgb(46, 46, 46);
                    border-radius: 1rem;
                    box-shadow: -1rem 1rem 10rem #000;
                }

                /* For Desktop */
                @media only screen and (min-width: 900px) {
                    .main-layout {
                        width: 75%;
                        margin: 1% 10%;
                        background-color: rgb(46, 46, 46);
                        border-radius: 3rem;
                        box-shadow: -1rem 1rem 10rem #000;
                    }

                    .main-layout .main-layout__content {
                        height: 82vh;
                        width: 55vw;
                        margin: 0 12.5%;
                        background-color: transparent;
                        border-radius: 0;
                        box-shadow: 0 0 0 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default Layout;