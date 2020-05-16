const Button = ({ buttonText, buttonColor, action }) => {
    let buttonClasses = "button";

    switch (buttonColor) {
        case "green": {
            buttonClasses += " button--green";
            break;
        };
        case "yellow": {
            buttonClasses += " button--yellow";
            break;
        };
    }

    return (
        <div>
            <button className={buttonClasses} onClick={action}>{buttonText}</button>

            <style jsx>{`
                .button {
                    background-color: transparent;
                    color: #f2f2f2;
                    border-radius: 0.75rem;
                    font-size: 3rem;
                    padding: 1rem;
                    letter-spacing: 0.2rem;
                    cursor: pointer;
                    margin: 0 1rem;
                }

                .button:focus {
                    outline-color: #f2f2f2;
                }

                .button:active {
                    transform: translateY(0.3rem);
                }

                .button:hover {
                    background-color: #00000020;
                }

                .button--green {
                    color: green;
                    border: 0.2rem solid green;
                }

                .button--yellow {
                    color: yellow;
                    border: 0.2rem solid yellow;
                }

            `}</style>
        </div>
    );
};

export default Button;