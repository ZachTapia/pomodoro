import FocusControlButtonSection from './FocusControlButtonSection';

const FocusControlButton = ({ activeSection, setCurrentCycleHandler }) => {

    return (
        <React.Fragment>
            <div className="focus-control-button">
                <FocusControlButtonSection sectionTitle="Pomodoro" sectionId="pomodoro" activeSection={activeSection} setCurrentCycleHandler={setCurrentCycleHandler} />
                <FocusControlButtonSection sectionTitle="Short Break" sectionId="shortBreak" activeSection={activeSection} setCurrentCycleHandler={setCurrentCycleHandler} />
                <FocusControlButtonSection sectionTitle="Long Break" sectionId="longBreak" activeSection={activeSection} setCurrentCycleHandler={setCurrentCycleHandler} />
            </div>

            <style jsx>{`

                .focus-control-button {
                    display: flex;
                    font-size: 4vw;
                    cursor: pointer;
                }

                /* For Desktop */
                @media only screen and (min-width: 900px) {
                    .focus-control-button {
                        display: flex;
                        font-size: 3rem;
                        padding: 1rem;
                        cursor: pointer;
                    }
                }
            `}</style>
        </React.Fragment>
    );
};

export default FocusControlButton;