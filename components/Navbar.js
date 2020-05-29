import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCog, faPalette } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ openChangeHandler, settingsOpen, colorsOpen }) => {

    return (
        <header>
            <nav className="navbar">
                <div className="navbar__logo">
                    <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="navbar__title">PomoDo-It</div>
                <div className={settingsOpen ? "navbar__settings navbar__settings--open" : "navbar__settings"} onClick={() => openChangeHandler("settings")} >
                    <FontAwesomeIcon icon={faCog} />
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
                    background-color: #141414;
                    margin-top: 1vh;
                    padding: 1vh 5vw;
                    font-size: 7vw;
                }

                .navbar__title, .navbar__colors {
                    margin-left: 2vw;
                }

                .navbar__settings {
                    margin-left: auto;
                }

                .navbar__settings:hover, .navbar__colors:hover {
                    transform: rotate(45deg);
                    transition: all ease-in 200ms;
                }

                .navbar__settings--open, .navbar__colors--open {
                  color: #000000;
                }

                /* For Desktop */
                @media only screen and (min-width: 900px) {
                    .navbar {
                        background-color: transparent;
                        font-size: 3vw;
                        padding-top: 3vh;
                    }
                }
            `}</style>
        </header >
    );
};

export default Navbar;