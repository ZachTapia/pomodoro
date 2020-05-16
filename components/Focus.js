import Timer from 'react-compound-timer';
import Button from './Button';

const Focus = () => {

    return (
        <div className="focus">
            <Timer
                initialTime={25 * 60 * 1000}
                direction="backward"
                // If single digit value, then prepend 0
                formatValue={(num) => num.toString().length == 2 ? num : '0' + num}
                startImmediately={false}>

                {({ start, pause, reset, timerState }) => (
                    <React.Fragment>
                        <div className="timer-container">
                            <div className="timer-container__timer">
                                <Timer.Minutes />:<Timer.Seconds />
                            </div>
                        </div>
                        <div className="focus__controls">
                            <Button buttonText="START" buttonColor="green" action={start} />
                            <Button buttonText="PAUSE" buttonColor="yellow" action={pause} />
                            <Button buttonText="RESET" buttonColor="yellow" action={reset} />
                        </div>
                    </React.Fragment>
                )}
            </Timer>

            <style jsx>{`
                .focus {
                    padding: 10rem 0;
                }

                .timer-container {
                    background-color: #111;
                    border-radius: 1.5rem;
                    box-shadow: 0 0 10rem #800202;
                    width: 25vw;
                    margin: 0 auto;
                    text-align: center;
                    vertical-align: middle;
                }

                .timer-container__timer {
                    font-family: 'Major Mono', monospace;
                    font-size: 8vw;
                    text-shadow: 0 0 3rem #800202;
                    color: #F90000;
                }

                .focus__controls {
                    display: flex;
                    margin: 3rem auto;
                    justify-content: center;
                }
            `}</style>
        </div>

    );
};

export default Focus;