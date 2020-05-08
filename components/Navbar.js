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

                <Link href="/"><img className="logo" src="/clock.png" alt="logo" /></Link>
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
                    background-color: #630D0D;
                    align-items: center;
                    text-align: center;
                }

                .navbar .logo {
                    height: 6rem;
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
                        list-style-type: none;
                    }

                    .navbar .drawer-button,
                    .navbar .logo-title {
                        display: none;
                    }

                    .navbar .logo {
                        height: 10rem;
                    }
                }
            `}</style>
        </header >
    );
};

export default Navbar;