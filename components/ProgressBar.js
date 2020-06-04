const ProgressBar = ({ totalSections, completedSections, completedColor, currentColors }) => {

    const sectionWidth = (100 / totalSections) + '%';

    // Create arrays to map over for each type of section, must check uncompletedSections > 0
    let completedSectionsArray = Array(completedSections).fill("completed");
    let uncompletedSectionsArray = totalSections - completedSections > 0 ? Array(totalSections - completedSections).fill("uncompleted") : [];

    return (
        <React.Fragment>
            <div className="progress-bar">
                {completedSectionsArray.map((section, index) => <div className="progress-bar__section progress-bar__section--completed" key={index}></div>)}
                {uncompletedSectionsArray.map((section, index) => <div className="progress-bar__section" key={index}></div>)}
            </div>

            <style jsx>{`

                .progress-bar {
                    display: flex;
                    margin: 0 2rem;
                    height: 3vh;
                    width: 50vw;
                }

                .progress-bar__section {
                    height: 100%;
                    width: ${sectionWidth};
                    border: 0.3rem solid ${currentColors[ 2 ]};
                }

                .progress-bar__section:not(:first-child):not(:last-child) {
                    border-left: none;
                }

                .progress-bar__section:first-child {
                    border-bottom-left-radius: 3rem;
                    border-top-left-radius: 3rem;
                }

                .progress-bar__section:last-child {
                    border-bottom-right-radius: 3rem;
                    border-top-right-radius: 3rem;
                    border-left: none;
                }

                .progress-bar__section--completed {
                    /* Only use tricolor theming if user has default theme on */
                    background-color: ${currentColors[ 0 ] == "#111" ? completedColor : currentColors[ 0 ]};
                }

                /* For Desktop */
                @media only screen and (min-width: 550px) {
                    .progress-bar {
                        width: 15vw;
                    }
                }

            `}</style>
        </React.Fragment>
    );
};

export default ProgressBar;