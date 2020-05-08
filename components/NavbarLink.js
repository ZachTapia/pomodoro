import { useState, useEffect } from 'react';
import Link from 'next/link';

const NavbarLink = (props) => {

    const [ linkClass, setLinkClass ] = useState("navbar__link");

    useEffect(() => {
        let activePage = window.location.pathname;
        activePage == props.href ? setLinkClass((prevState) => prevState += " navbar__link--active") : null;
    }, []);


    return (
        <div>
            <Link href={props.href}>
                <a className={linkClass}>{props.title}</a>
            </Link>

            <style jsx>{`

                /* For Mobile*/
                .navbar__link {
                    display: none;
                }

                /* For Desktop */
                @media only screen and (min-width: 900px) {

                    .navbar__link {
                        display: inline-block;
                        font-size: 5rem;
                        text-decoration: none;
                        padding: 0 3rem;
                        color: white;
                    }

                    .navbar__link.navbar__link--active {
                    color: black;
                    }
                }
            `}</style>
        </div>
    );
};

export default NavbarLink;