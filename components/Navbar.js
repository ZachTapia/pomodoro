import Link from 'next/link';

import style from '../sass/Navbar.module.scss';
import DrawerToggleButton from './DrawerToggleButton';

const Navbar = (props) => {
    let { drawerToggleHandler } = props;

    return (
        <header>
            <nav className={style.Navbar}>
                <div className={style.DrawerButton}>
                    <DrawerToggleButton drawerToggleHandler={drawerToggleHandler} />
                </div>

                <Link href="/"><img className={style.Logo} src="/clock.png" alt="logo" /></Link>
                <div className={style.LogoTitle}>Pomodoro Timer</div>

                <Link href="/"><a className={style.NavLinks}>Focus</a></Link>
                <Link href="/"><a className={style.NavLinks}>Stats</a></Link>
                <Link href="/"><a className={style.NavLinks}>Settings</a></Link>
                <Link href="/"><a className={style.NavLinks}>Login</a></Link>

            </nav>
        </header >
    );
};

export default Navbar;