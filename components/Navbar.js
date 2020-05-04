import Link from 'next/link';

import DrawerToggleButton from './DrawerToggleButton';

const Navbar = (props) => {
    let { drawerToggleHandler } = props;

    return (
        <header>
            <nav className="Navbar">
                <div className="DrawerButton">
                    <DrawerToggleButton drawerToggleHandler={drawerToggleHandler} />
                </div>

                <Link href="/"><img className="Logo" src="/clock.png" alt="logo" /></Link>
                <div className="LogoTitle">Pomodoro Timer</div>

                <Link href="/"><a className="NavLinks">Focus</a></Link>
                <Link href="/"><a className="NavLinks">Stats</a></Link>
                <Link href="/"><a className="NavLinks">Settings</a></Link>
                <Link href="/"><a className="NavLinks">Login</a></Link>
            </nav>

            <style jsx>{`
                .Navbar {
                    display: flex;
                    background-color: #630D0D;
                    align-items: center;
                    text-align: center;
                }

                .Navbar .Logo {
                        height: 6rem;
                }

                .Navbar .LogoTitle {
                        font-size: 2.5rem;
                        padding: 1rem 0 0.5rem 0;
                }

                .Navbar .NavLinks {
                        display: none;
                }

                /* For Desktop */
                @media only screen and (min-width: 900px) {
                    .Navbar {
                        background-color: transparent;
                        justify-content: space-evenly;
                        list-style-type: none;
                    }


                    .Navbar .DrawerButton,
                    .Navbar .LogoTitle {
                            display: none;
                    }

                    .Navbar .Logo {
                        height: 10rem;
                    }

                    .Navbar .NavLinks {
                        display: inline-block;
                        font-size: 5rem;
                        text-decoration: none;
                        border: 0.1rem solid transparent;
                        padding: 0 3rem;
                    }

                    .Navbar .NavLinks :hover,
                    .Navbar .NavLinks :active,
                    .Navbar .NavLinks :focus {
                            border: 0.1rem solid #630D0D;
                            border-radius: 4rem;
                            background-color: #630D0D;
                    }

                    .Navbar .NavLinks :visited {
                        color: #F2F2F2;
                    }
                }
            `}</style>
        </header >
    );
};

export default Navbar;