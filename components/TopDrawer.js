// import style from '../sass/TopDrawer.module.scss';
import Link from 'next/link';

const TopDrawer = (props) => {
    let { backdropClickHandler, show } = props;

    let drawerClasses = show ? "TopDrawer Open" : "TopDrawer";
    let backdropClass = show ? "Backdrop" : "";

    return (
        <div>
            <nav className={drawerClasses}>
                <ul className="TopDrawerItems">
                    <li><Link href="/"><a>Focus</a></Link></li>
                    <li><Link href="/"><a>Stats</a></Link></li>
                    <li><Link href="/"><a>Settings</a></Link></li>
                    <li><Link href="/"><a>Login</a></Link></li>
                </ul>
            </nav>
            <div className={backdropClass} onClick={backdropClickHandler}></div>

            <style jsx>{`
                .TopDrawer {
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

                .TopDrawer.Open {
                    transform: translateY(0);
                }

                .TopDrawer .TopDrawerItems {
                    list-style-type: none;
                    display: flex;
                    flex-direction: column;
                }

                .TopDrawer .TopDrawerItems a {
                    padding-left: 1rem;
                    color: black;
                    text-decoration: none;
                    font-size: 2.5rem;
                }

                .Backdrop {
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