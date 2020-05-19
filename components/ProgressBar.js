const ProgressBar = () => {
    return (
        <React.Fragment>
            <div className="progress-bar">
                <div className="progress-bar__section progress-bar__section--completed"></div>
                <div className="progress-bar__section progress-bar__section--completed"></div>
                <div className="progress-bar__section progress-bar__section--completed"></div>
                <div className="progress-bar__section"></div>
            </div>

            <style jsx>{`

                .progress-bar {
                    display: flex;
                    margin: 0 2rem;
                    height: 3rem;
                    width: 20rem;
                }

                .progress-bar__section {
                    height: 100%;
                    width: 25%;
                    border: 0.3rem solid #f2f2f2;
                }

                .progress-bar__section:first-child {
                    border-bottom-left-radius: 30%;
                    border-top-left-radius: 30%;
                }

                .progress-bar__section:last-child {
                    border-bottom-right-radius: 30%;
                    border-top-right-radius: 30%;

                }

                .progress-bar__section--completed {
                    background-color: red;
                }



            `}</style>
        </React.Fragment>
    );
};

export default ProgressBar;