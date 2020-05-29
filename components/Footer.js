import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__socials">
                <div className="footer__socials__element">
                    <FontAwesomeIcon icon={faGithub} size="4x" />
                </div>
                <div className="footer__socials__element">
                    <FontAwesomeIcon icon={faLinkedinIn} size="4x" />
                </div>
            </div>

            <style jsx>{`
                .footer {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                }

                .footer__socials {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 1vh;
                }

                .footer__socials__element {
                    margin: 0 1rem;
                }
            `}</style>
        </div>
    );
};

export default Footer;