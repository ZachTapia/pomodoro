import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ColorsDrawer from './ColorsDrawer';
import InfoModal from './InfoModal';

const Layout = ({ children }) => {

    const [ infoModalOpen, setInfoModalOpen ] = useState(false);
    const [ colorsDrawerOpen, setColorsDrawerOpen ] = useState(false);
    const [ currentColors, setCurrentColors ] = useState([ "#111", "#2e2e2e", "#e2e2e2" ]);

    const openChangeHandler = (buttonClicked) => {
        if (buttonClicked == "info") {
            setInfoModalOpen(prevState => !prevState);
            setColorsDrawerOpen(false);
        } else if (buttonClicked == "colors") {
            setColorsDrawerOpen(prevState => !prevState);
            setInfoModalOpen(false);
        }
    };

    const colorChangeHandler = (colorTheme) => {
        switch (colorTheme) {
            case "Default": {
                setCurrentColors([ "#111", "#2e2e2e", "#e2e2e2" ]);
                break;
            }
            case "Beach": {
                setCurrentColors([ "#fe8a71", "#f6cd61", "#27496d" ]);
                break;
            }
            case "Deep": {
                setCurrentColors([ "#142850", "#27496d", "#34ebab" ]);
                break;
            }
            case "Mint": {
                setCurrentColors([ "#473a34", "#998272", "#bef798" ]);
                break;
            }
            case "Magma": {
                setCurrentColors([ "#6f0000", "#ff5200", "#ffcd3c" ]);
                break;
            }
        }
    };

    return (
        <React.Fragment>
            <ColorsDrawer colorsDrawerOpen={colorsDrawerOpen} colorChangeHandler={colorChangeHandler} />
            <div className={colorsDrawerOpen ? "main-layout main-layout--down" : "main-layout"}>
                <Navbar openChangeHandler={openChangeHandler} infoModalOpen={infoModalOpen} colorsDrawerOpen={colorsDrawerOpen} currentColors={currentColors} />
                <div className="main-layout__content">
                    <InfoModal openChangeHandler={openChangeHandler} infoModalOpen={infoModalOpen} />
                    {React.cloneElement(children, { currentColors: currentColors })}
                    <Footer currentColors={currentColors} />
                </div>


                <style jsx>{`
                    /*  For Mobile */
                    .main-layout {
                        transform: translateY(-10%);
                        transition: all ease-out 400ms;
                    }

                    .main-layout--down {
                        transform: translateY(0%);
                        transition: all ease-in 400ms;
                    }

                    .main-layout__content {
                        position: relative;
                        height: 75vh;
                        width: 90vw;
                        margin: 2vh 5vw;
                        background-color: ${currentColors[ 1 ]};
                        border-radius: 1rem;
                        box-shadow: -1rem 1rem 10rem #000;
                    }

                /* For Desktop */
                @media only screen and (min-width: 550px) {
                    .main-layout {
                        width: 75%;
                        margin: 1.5% auto;
                        background-color: ${currentColors[ 1 ]};
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