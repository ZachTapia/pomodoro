import { useState, useRef, useEffect } from 'react';
import Timer from 'react-compound-timer';
import FocusControlButton from './FocusControlButton';
import Button from './Button';
import FocusDetails from './FocusDetails';

const Focus = () => {

    const timer = useRef();

    const [ currentCycle, setCurrentCycle ] = useState("pomodoro");
    const [ currentColor, setCurrentColor ] = useState("#800202");
    const [ timerLength, setTimerLength ] = useState(1 * 4 * 1000);
    const [ completedCycles, setCompletedCycles ] = useState({ "pomodoro": 0, "shortBreak": 0, "longBreak": 0 });

    const setCurrentCycleHandler = (cycle) => {
        setCurrentCycle(cycle);

        switch (cycle) {
            case "pomodoro": {
                setCurrentColor("#800202");
                setTimerLength(1 * 4 * 1000);
                break;
            }
            case "shortBreak": {
                setCurrentColor("#508312");
                setTimerLength(1 * 3 * 1000);
                break;
            }
            case "longBreak": {
                setCurrentColor("#125083");
                setTimerLength(25 * 60 * 1000);
                break;
            }
        };
    };

    const cycleEndHandler = () => {
        switch (currentCycle) {
            case "pomodoro": {
                setCompletedCycles(prevState => { return { ...prevState, [ currentCycle ]: prevState[ currentCycle ] + 1 }; });
                break;
            };

            case "shortBreak": {
                setCompletedCycles(prevState => { return { ...prevState, [ currentCycle ]: prevState[ currentCycle ] + 1 }; });
                setCurrentCycleHandler("pomodoro");
                break;
            };

            case "longBreak": {
                setCompletedCycles(prevState => { return { ...prevState, [ currentCycle ]: prevState[ currentCycle ] + 1 }; });
                setCurrentCycleHandler("pomodoro");
                break;
            };
        }

        timer.current.reset();
    };


    useEffect(() => {
        if (completedCycles.pomodoro > 0) {
            // After every 4th completed pomodoro, initiate a long break
            (completedCycles.pomodoro) % 4 == 0 ? setCurrentCycleHandler("longBreak") : setCurrentCycleHandler("shortBreak");
        }

    }, [ completedCycles.pomodoro ]);

    return (
        <div className="focus">
            <div className="focus-controls">
                <FocusControlButton activeSection={currentCycle} setCurrentCycleHandler={setCurrentCycleHandler} />
            </div>
            <Timer
                ref={timer}
                key={timerLength}
                initialTime={timerLength}
                direction="backward"
                formatValue={(num) => num.toString().length == 2 ? num : '0' + num} // If single digit value, then prepend 0
                startImmediately={false}
                checkpoints={[ { time: 0, callback: () => cycleEndHandler() } ]}
            >

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

            <FocusDetails completedCycles={completedCycles} />

            <style jsx>{`
                .focus {
                    padding: 10rem 0;
                }

                .focus-controls, .timer__controls {
                    display: flex;
                    margin: 3rem auto;
                    justify-content: center;
                }

                .focus-controls {
                    margin-top: 0rem;
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


            `}</style>
        </div>

    );
};

export default Focus;