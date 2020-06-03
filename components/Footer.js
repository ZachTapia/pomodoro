import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ currentColors }) => {
    return (
        <div className="footer">
            <div className="footer__socials">
                <div className="footer__socials__element">
                    <a href="https://github.com/ZachTapia/pomodoro" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="4x" />
                    </a>
                </div>
                <div className="footer__socials__element">
                    <a href="https://www.linkedin.com/in/zach-tapia-a01ab918b/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} size="4x" />
                    </a>
                </div>
            </div>

            <style jsx>{`

                a {
                    color: inherit;
                    text-decoration: none;
                }

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
                    color: ${currentColors[ 2 ]};
                }

                .footer__socials__element {
                    margin: 0 1rem;
                }
            `}</style>
        </div>
    );
};

export default Footer;