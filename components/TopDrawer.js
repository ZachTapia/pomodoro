// import style from '../sass/TopDrawer.module.scss';
import Link from 'next/link';

const TopDrawer = (props) => {
    let { backdropClickHandler, show } = props;

    let drawerClasses = show ? "top-drawer top-drawer--open" : "top-drawer";
    let backdropClass = show ? "backdrop" : "";

    return (
        <div>
            <nav className={drawerClasses}>
                <ul className="top-drawer__links-container">
                    <li className="top-drawer__link">
                        <Link href="/"><a>Focus</a></Link>
                    </li>
                    <li className="top-drawer__link">
                        <Link href="/stats"><a>Stats</a></Link>
                    </li>
                    <li className="top-drawer__link">
                        <Link href="/settings"><a>Settings</a></Link>
                    </li>
                    <li className="top-drawer__link">
                        <Link href="/"><a>Login</a></Link>
                    </li>
                </ul>
            </nav>
            <div className={backdropClass} onClick={backdropClickHandler}></div>

            <style jsx>{`
                .top-drawer {
                    position: fixed;
                    background: white;
                    box-shadow: 2px 0 5px rgba(0,0,0,0.5);
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 50;
                    transform: translateY(-100%);
                    transition: transform 0.4s ease-in;
                }

                .top-drawer--open {
                    transform: translateY(0);
                }

                .top-drawer__links-container {
                    list-style-type: none;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .top-drawer__link {
                    font-size: 3rem;
                    margin: 1.5rem 0;
                }

                .top-drawer__link:not(:last-child)::after {
                    content: '';
                    display: block;
                    width: 80%;
                    height: 1rem;
                    color: #999;
                }

                a {
                    color: black;
                    text-decoration: none;
                }

                .backdrop {
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background: rgba(0,0,0,0.3);
                    z-index: 40;
                }
            `}</style>

        </div>
    );
};

export default TopDrawer;