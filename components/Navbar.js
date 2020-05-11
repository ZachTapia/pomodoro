import { useEffect } from 'react';
import DrawerToggleButton from './DrawerToggleButton';
import Link from 'next/link';
import NavbarLink from './NavbarLink';

const Navbar = (props) => {
    let { drawerToggleHandler } = props;

    return (
        <header>
            <nav className="navbar">
                <div className="drawer-button">
                    <DrawerToggleButton drawerToggleHandler={drawerToggleHandler} />
                </div>


                <img className="logo" src="/clock.png" alt="logo" />
                <div className="logo-title">Pomodoro Timer</div>

                <NavbarLink href="/" title="Focus" />
                <NavbarLink href="/stats" title="Stats" />
                <NavbarLink href="/settings" title="Settings" />
                <NavbarLink href="" title="Login" />
            </nav>

            <style jsx>{`
                /* For Mobile */
                .navbar {
                    display: flex;
                    background-color: #141414;
                    align-items: center;
                    text-align: center;
                    margin: 0.5rem;
                }

                .navbar .drawer-button {
                    margin-left: 1rem;
                }

                .navbar .logo {
                    height: 4rem;
                    margin-right: 1rem;
                    margin-left: 10%;
                }

                .navbar .logo-title {
                    font-size: 2.5rem;
                    padding: 1rem 0 0.5rem 0;
                }

                /* For Desktop */
                @media only screen and (min-width: 900px) {
                    .navbar {
                        background-color: transparent;
                        justify-content: space-evenly;
                        padding-top: 1rem;
                        margin: 0;
                    }

                    .navbar .drawer-button,
                    .navbar .logo-title {
                        display: none;
                    }

                    .navbar .logo {
                        height: 7rem;
                        margin: 0;
                    }
                }
            `}</style>
        </header >
    );
};

export default Navbar;