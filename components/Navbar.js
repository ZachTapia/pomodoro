import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faQuestion, faPalette } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ openChangeHandler, infoOpen, colorsOpen, currentColors }) => {

    return (
        <header>
            <nav className="navbar">
                <div className="navbar__logo">
                    <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="navbar__title">PomoDo-It</div>
                <div className={infoOpen ? "navbar__info navbar__info--open" : "navbar__info"} onClick={() => openChangeHandler("info")} >
                    <FontAwesomeIcon icon={faQuestion} />
                </div>
                <div className={colorsOpen ? "navbar__colors navbar__colors--open" : "navbar__colors"} onClick={() => openChangeHandler("colors")}>
                    <FontAwesomeIcon icon={faPalette} />
                </div>
            </nav>

            <style jsx>{`
                /* For Mobile */
                .navbar {
                    display: flex;
                    justify-content: start;
                    background-color: ${currentColors[ 0 ] == "#111" ? currentColors[ 0 ] : currentColors[ 1 ]};
                    color: ${currentColors[ 2 ]};
                    margin-top: 1vh;
                    padding: 1vh 5vw;
                    font-size: 7vw;
                }

                .navbar__title, .navbar__colors {
                    margin-left: 2vw;
                }

                .navbar__info {
                    margin-left: auto;
                }


                .navbar__info:hover, .navbar__colors:hover {
                    transform: scale(1.2);
                    transition: all ease-in 150ms;
                }

                .navbar__info--open, .navbar__colors--open {
                  color: #000000;
                }

                /* For Desktop */
                @media only screen and (min-width: 550px) {
                    .navbar {
                        background-color: transparent;
                        font-size: 3vw;
                        padding-top: 3vh;
                    }

                    .navbar__colors, .navbar__info {
                        cursor: pointer;
                    }
                }
            `}</style>
        </header >
    );
};

export default Navbar;