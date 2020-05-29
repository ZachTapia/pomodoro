import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ColorsDrawer from './ColorsDrawer';

const Layout = ({ children }) => {

    const [ settingsOpen, setSettingsOpen ] = useState(false);
    const [ colorsOpen, setColorsOpen ] = useState(false);

    const openChangeHandler = (buttonClicked) => {
        if (buttonClicked == "settings") {
            setSettingsOpen(prevState => !prevState);
            setColorsOpen(false);
        } else if (buttonClicked == "colors") {
            setColorsOpen(prevState => !prevState);
            setSettingsOpen(false);
        }
    };

    return (
        <React.Fragment>
            <ColorsDrawer />
            <div className="main-layout">
                <Navbar openChangeHandler={openChangeHandler} settingsOpen={settingsOpen} colorsOpen={colorsOpen} />
                <div className="main-layout__content">
                    {children}
                    <Footer />
                </div>


                <style jsx>{`
                /*  For Mobile */
                .main-layout__content {
                    position: relative;
                    height: 75vh;
                    width: 90vw;
                    margin: 2vh 5vw;
                    background-color: #2e2e2e;
                    border-radius: 1rem;
                    box-shadow: -1rem 1rem 10rem #000;
                }

                /* For Desktop */
                @media only screen and (min-width: 900px) {
                    .main-layout {
                        width: 75%;
                        margin: 1.5% auto;
                        background-color: #2e2e2e;
                        border-radius: 3rem;
                        box-shadow: -1rem 1rem 10rem #000;
                    }

                    .main-layout__content {
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
        </React.Fragment>

    );
};

export default Layout;