import { useState, useRef, useEffect } from 'react';
import Timer from 'react-compound-timer';
import FocusControlButton from './FocusControlButton';
import FocusButton from './FocusButton';
import FocusDetails from './FocusDetails';

const Focus = ({ currentColors }) => {

    // Grab reference to Timer for access to functions
    const timer = useRef();

    const [ currentCycle, setCurrentCycle ] = useState("pomodoro");
    const [ currentColor, setCurrentColor ] = useState("#800202");
    const [ timerLength, setTimerLength ] = useState(25 * 60 * 1000);
    const [ completedCycles, setCompletedCycles ] = useState({ "pomodoro": 0, "shortBreak": 0, "longBreak": 0 });

    const setCurrentCycleHandler = (cycle) => {
        setCurrentCycle(cycle);

        switch (cycle) {
            case "pomodoro": {
                currentColors[ 0 ] == "#111" ? setCurrentColor("#800202") : setCurrentColor(currentColors[ 2 ]);
                setTimerLength(25 * 60 * 1000);
                break;
            }
            case "shortBreak": {
                currentColors[ 0 ] == "#111" ? setCurrentColor("#508312") : setCurrentColor(currentColors[ 2 ]);
                setTimerLength(5 * 60 * 1000);
                break;
            }
            case "longBreak": {
                currentColors[ 0 ] == "#111" ? setCurrentColor("#125083") : setCurrentColor(currentColors[ 2 ]);
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

    // Updates timer color when alternating themes
    useEffect(() => {
        setCurrentCycleHandler(currentCycle);
    }, [ currentColors ]);

    return (
        <div className="focus">
            <div className="focus__controls">
                <FocusControlButton activeSection={currentCycle} setCurrentCycleHandler={setCurrentCycleHandler} currentColors={currentColors} />
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
                            <FocusButton buttonText="START" action={start} currentColors={currentColors} />
                            <FocusButton buttonText="PAUSE" action={pause} currentColors={currentColors} />
                            <FocusButton buttonText="RESET" action={reset} currentColors={currentColors} />
                        </div>
                    </React.Fragment>
                )}
            </Timer>

            <div className="focus__details">
                <FocusDetails completedCycles={completedCycles} currentColors={currentColors} />
            </div>

            <style jsx>{`
                .focus {
                    padding: 2.5vh 0;
                }

                .focus__controls, .timer__controls,  .focus__details {
                    display: flex;
                    margin: 0 auto;
                    justify-content: center;
                }

                .timer-container {
                    background-color: ${currentColors[ 0 ]};
                    border-radius: 1.5rem;
                    box-shadow: 0 0 10rem ${currentColor};
                    width: 60vw;
                    margin: 5vh auto;
                    text-align: center;
                }

                .timer-container__timer {
                    font-family: 'Ubuntu Mono';
                    font-size: 20vw;
                    text-shadow: 0 0 3rem ${currentColor};
                    color: ${currentColor};
                }

                /* For Desktop */
                @media only screen and (min-width: 900px) {
                    .focus {
                        padding: 5rem 0;
                    }

                    .focus__controls, .timer__controls,  .focus__details {
                        display: flex;
                        margin: 1.5rem auto;
                        justify-content: center;
                    }

                    .focus__controls {
                        margin-top: 0rem;
                    }

                    .timer-container {
                        border-radius: 1.5rem;
                        box-shadow: 0 0 10rem ${currentColor};
                        width: 30vw;
                        margin: 0 auto;
                        text-align: center;
                    }

                    .timer-container__timer {
                        font-family: 'Ubuntu Mono';
                        font-size: 10vw;
                        text-shadow: 0 0 3rem ${currentColor};
                        color: ${currentColor};
                    }
                }


            `}</style>
        </div>

    );
};

export default Focus;