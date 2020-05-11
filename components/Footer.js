const Footer = () => {
    return (
        <div className="footer">
            <div className="socials">
                <img className="socials__logo" src="/linkedin.png" alt="linkedin_link" />
                <img className="socials__logo" src="/github.png" alt="linkedin_link" />
            </div>

            <style jsx>{`
                /* For Mobile */
                .footer {
                    display: flex;
                    justify-content: center;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: 0 auto 1rem;
                }

                .socials .socials__logo{
                    width: 3.5rem;
                    margin: 0 1rem;
                }

                /* For Desktop*/

            `}</style>
        </div>
    );
};

export default Footer;