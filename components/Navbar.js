import Link from 'next/link';

import style from '../sass/Navbar.module.scss';
import DrawerToggleButton from './DrawerToggleButton';

const Navbar = (props) => {
    let { drawerToggleHandler } = props;

    return (
        <header>
            <nav className={style.Navbar}>
                <DrawerToggleButton drawerToggleHandler={drawerToggleHandler} />
                <Link href="/"><img src="/clock.png" alt="logo" /></Link>
                <div className={style.LogoTitle}>Pomodoro Timer</div>
                <ul className={style.NavItems}>
                    <li><Link href="/"><a>Focus</a></Link></li>
                    <li><Link href="/"><a>Stats</a></Link></li>
                    <li><Link href="/"><a>Settings</a></Link></li>
                    <li><Link href="/"><a>Login</a></Link></li>
                </ul>
            </nav>
        </header >
    );
};

export default Navbar;