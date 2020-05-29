import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ColorsDrawer from './ColorsDrawer';

const Layout = ({ children }) => {

    const [ settingsDrawerOpen, setSettingsDrawerOpen ] = useState(false);
    const [ colorsDrawerOpen, setColorsDrawerOpen ] = useState(false);
    const [ currentColors, setCurrentColors ] = useState([ "#fff", "#fff", "#fff" ]);

    const openChangeHandler = (buttonClicked) => {
        if (buttonClicked == "settings") {
            setSettingsDrawerOpen(prevState => !prevState);
            setColorsDrawerOpen(false);
        } else if (buttonClicked == "colors") {
            setColorsDrawerOpen(prevState => !prevState);
            setSettingsDrawerOpen(false);
        }
    };

    return (
        <React.Fragment>
            <ColorsDrawer colorsDrawerOpen={colorsDrawerOpen} />
            <div className={colorsDrawerOpen ? "main-layout main-layout--down" : "main-layout"}>
                <Navbar openChangeHandler={openChangeHandler} settingsDrawerOpen={settingsDrawerOpen} colorsDrawerOpen={colorsDrawerOpen} />
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
                        transform: translateY(-10%);
                        transition: all ease-out 400ms;
                    }

                    .main-layout--down {
                        transform: translateY(0%);
                        transition: all ease-in 400ms;
                    }
                    .main-layout__content {
                        height: 75vh;
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