const Focus = () => {
    return (
        <div>
            <div className="timer-container">
                <div className="timer-container__timer">
                    24:22
                </div>
            </div>

            <style jsx>{`


                .timer-container {
                    background-color: #7e1616;
                    border-radius: 1.5rem;
                    box-shadow: 0 0 10rem #fff;
                    width: 25vw;
                    margin: 1rem auto 0;
                    text-align: center;
                    vertical-align: middle;
                }

                .timer-container__timer {
                    line-height: 1.75;
                    font-size: 8vw;
                    text-shadow: 0 0 2rem rgb(187, 187, 187);
                }

            `}</style>
        </div>
    );
};

export default Focus;