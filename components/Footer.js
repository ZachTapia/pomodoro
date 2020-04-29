import style from '../sass/Footer.module.scss';

const Footer = () => {
    return (
        <div className={style.Footer}>
            <div className={style.Socials}>
                <img src="/linkedin.svg" alt="linkedin_link" />
                <img src="/github.svg" alt="linkedin_link" />
            </div>
        </div>
    );
};

export default Footer;