const Button = ({ buttonText, action }) => {

    return (
        <React.Fragment>
            <button className="button" onClick={action}>{buttonText}</button>

            <style jsx>{`
                .button {
                    position: relative;
                    font-family: Ubuntu Mono;
                    background-color: transparent;
                    border: none;
                    color: #f2f2f2;
                    font-size: 3rem;
                    letter-spacing: 0.1rem;
                    cursor: pointer;
                    margin: 2rem;
                    padding: 0.2rem;
                }

                .button:hover, .button:active {
                    transform: scale(1.1);
                    transition: all ease-in 300ms;
                }

                .button::before, .button::after {
                    display: block;
                    content: '';
                    position: absolute;
                    background-color: #f2f2f2;
                    width: 100%;
                    height: 0px;
                }

                .button::before {
                    top: 0;
                    left: 0;
                }

                .button::after {
                    bottom: 0;
                    left: 0;
                }

                .button:hover::before, .button:hover::after,
                .button:active::before, .button:active::after {
                    height: 3px;
                    transition: all ease-in 200ms;
                }

            `}</style>
        </React.Fragment>
    );
};

export default Button;