import style from '../sass/TopDrawer.module.scss';
import Link from 'next/link';

const TopDrawer = (props) => {
    let { backdropClickHandler, show } = props;

    return (
        <div>
            <nav className={`${style.TopDrawer} ${show ? style.Open : ""}`}>
                <ul className={style.TopDrawerItems}>
                    <li><Link href="/"><a>Focus</a></Link></li>
                    <li><Link href="/"><a>Stats</a></Link></li>
                    <li><Link href="/"><a>Settings</a></Link></li>
                    <li><Link href="/"><a>Login</a></Link></li>
                </ul>
            </nav>
            <div className={`${show ? style.Backdrop : ""}`} onClick={backdropClickHandler}></div>
        </div>
    );
};

export default TopDrawer;