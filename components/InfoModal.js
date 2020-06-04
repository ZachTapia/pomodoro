const InfoModal = ({ infoModalOpen, openChangeHandler }) => {
    return (
        <React.Fragment>
            <div className={infoModalOpen ? "info-modal info-modal--open" : "info-modal"}>
                <div className="info-modal__welcome">
                    Welcome to PomoDo-It
                    <div className="info-modal__welcome__sub">The Pomodoro Timer for doers</div>
                </div>

                <div className="info-modal__explain">
                    How the Pomodoro Technique works:
                    <div className="info-modal__explain__sub">
                        1. Identify a task to work on.
                    </div>
                    <div className="info-modal__explain__sub">
                        2. Set a timer for 25 minutes.
                    </div>
                    <div className="info-modal__explain__sub">
                        3. Work on task distraction free.
                    </div>
                    <div className="info-modal__explain__sub">
                        4. End work when timer rings and mark pomodoro complete.
                    </div>
                    <div className="info-modal__explain__sub">
                        5. Take a 5 minute break, then move onto next task.
                    </div>
                    <div className="info-modal__explain__sub">
                        6. After 4 pomodoros, take a longer break, then start again.
                    </div>
                </div>
            </div>
            <style jsx>{`
                /* For Mobile */
                .info-modal {
                    display: none;
                    width: 90%;
                    height: 70%;
                    position: fixed;
                    z-index: 1;
                    top: 10%;
                    left: 5%;
                    background-color: #ebebeb;
                    border-radius: 5%;
                    text-align: center;
                    padding: 2%;
                }

                .info-modal--open {
                    display: initial;
                }

                .info-modal__welcome {
                    color: #6f0000;
                    font-size: 8vw;
                    line-height: 1.2;
                }

                .info-modal__welcome__sub {
                    color: #303030;
                    font-size: 5vw;
                    font-style: italic;
                }

                .info-modal__explain {
                    margin: 5vh 3vw 0;
                    text-align: left;
                    color: #303030;
                    font-size: 4.5vw;
                    line-height: 1.4;
                }

                /* For Desktop */
                @media only screen and (min-width: 550px) {
                    .info-modal {
                        width: 50%;
                        left: 25%;
                        top: 12%;
                        text-align: center;
                        padding: 2%;
                    }

                    .info-modal__welcome {
                        font-size: 3vw;
                    };

                    .info-modal__welcome__sub {
                        font-size: 1.5vw;
                    }

                    .info-modal__explain {
                        font-size: 1.25vw;
                    }
                }
            `}</style>
        </React.Fragment>
    );
};

export default InfoModal;