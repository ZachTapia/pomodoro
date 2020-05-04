const Footer = () => {
    return (
        <div className="footer">
            <div className="socials">
                <img className="socials__logo" src="/linkedin.svg" alt="linkedin_link" />
                <img className="socials__logo" src="/github.svg" alt="linkedin_link" />
            </div>

            <style jsx>{`
                .footer {
                    display: flex;
                    justify-content: center;
                }

                .socials .socials__logo{
                    width: 3.5rem;
                    margin: 0 1rem;
                }
            `}</style>
        </div>
    );
};

export default Footer;