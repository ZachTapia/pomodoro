import { useState, useEffect } from 'react';
import Timer from 'react-compound-timer';
import FocusControlButton from './FocusControlButton';
import Button from './Button';
import FocusDetails from './FocusDetails';

const Focus = () => {

    const [ currentCycle, setCurrentCycle ] = useState("pomodoro");
    const [ currentColor, setCurrentColor ] = useState("#800202");
    const [ timerLength, setTimerLength ] = useState(25 * 60 * 1000);

    const setCurrentCycleHandler = (sectionId) => {
        setCurrentCycle(sectionId);

        switch (sectionId) {
            case "pomodoro": {
                setCurrentColor("#800202");
                setTimerLength(25 * 60 * 1000);
                break;
            }
            case "shortBreak": {
                setCurrentColor("#508312");
                setTimerLength(5 * 60 * 1000);
                break;
            }
            case "longBreak": {
                setCurrentColor("#125083");
                setTimerLength(25 * 60 * 1000);
                break;
            }
        };
    };

    return (
        <div className="focus">
            <div className="focus-controls">
                <FocusControlButton activeSection={currentCycle} setCurrentCycleHandler={setCurrentCycleHandler} />
            </div>
            <Timer
                key={timerLength}
                initialTime={timerLength}
                direction="backward"
                formatValue={(num) => num.toString().length == 2 ? num : '0' + num} // If single digit value, then prepend 0
                startImmediately={false}>

                {({ start, pause, reset }) => (
                    <React.Fragment>
                        <div className="timer-container">
                            <div className="timer-container__timer">
                                <Timer.Minutes />:<Timer.Seconds />
                            </div>
                        </div>
                        <div className="timer__controls">
                            <Button buttonText="START" action={start} />
                            <Button buttonText="PAUSE" action={pause} />
                            <Button buttonText="RESET" action={reset} />
                        </div>
                    </React.Fragment>
                )}
            </Timer>

            <FocusDetails />

            <style jsx>{`
                .focus {
                    padding: 10rem 0;
                }

                .timer-container {
                    background-color: #111;
                    border-radius: 1.5rem;
                    box-shadow: 0 0 10rem ${currentColor};
                    width: 25vw;
                    margin: 0 auto;
                    text-align: center;
                    vertical-align: middle;
                }

                .timer-container__timer {
                    font-family: 'Ubuntu Mono';
                    font-size: 8vw;
                    text-shadow: 0 0 3rem ${currentColor};
                    color: ${currentColor};
                }

                .focus-controls, .timer__controls {
                    display: flex;
                    margin: 3rem auto;
                    justify-content: center;
                }
            `}</style>
        </div>

    );
};

export default Focus;