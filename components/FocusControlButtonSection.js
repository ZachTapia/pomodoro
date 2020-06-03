const FocusControlButtonSection = ({ sectionTitle, sectionId, activeSection, setCurrentCycleHandler, currentColors }) => {
    let buttonClasses = "focus-control-button__section";
    let myColor = "";

    activeSection == sectionId ? buttonClasses += " focus-control-button__section--active" : null;

    // Only apply tricolor scheme if user is using default colors
    if (currentColors[ 0 ] == "#111") {
        switch (sectionId) {
            case "pomodoro": {
                myColor = "#800202";
                break;
            }
            case "shortBreak": {
                myColor = "#508312";
                break;
            }
            case "longBreak": {
                myColor = "#125083";
                break;
            }
        }
    } else {
        myColor = currentColors[ 0 ];
    }

    return (
        <React.Fragment>
            <div className={buttonClasses} onClick={() => setCurrentCycleHandler(sectionId)}>{sectionTitle}</div>

            <style jsx>{`
                .focus-control-button__section {
                    border: 0.2rem solid ${currentColors[ 2 ]};
                    padding: 1rem;
                    color: ${currentColors[ 2 ]}
                }

                .focus-control-button__section:hover {
                    background-color: ${myColor};
                    transition: all ease-in 200ms;
                }

                .focus-control-button__section:first-child {
                    border-bottom-left-radius: 1rem;
                    border-top-left-radius: 1rem;
                }

                .focus-control-button__section:last-child {
                    border-bottom-right-radius: 1rem;
                    border-top-right-radius: 1rem;
                }

                .focus-control-button__section--active {
                    background-color: ${myColor};
                }

            `}</style>
        </React.Fragment>
    );
};

export default FocusControlButtonSection;