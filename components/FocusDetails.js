import ProgressBar from './ProgressBar';

const FocusDetails = ({ completedCycles, currentColors }) => {

    return (
        <React.Fragment>
            <div className="details">
                <div className="details__row">
                    <div className="details__row__title">Pomodoros</div>
                    <ProgressBar totalSections={4} completedSections={completedCycles.pomodoro} completedColor="#800202" currentColors={currentColors} />
                </div>

                <div className="details__row">
                    <div className="details__row__title"> Short Breaks</div>
                    <ProgressBar totalSections={4} completedSections={completedCycles.shortBreak} completedColor="#508312" currentColors={currentColors} />
                </div>

                <div className="details__row">
                    <div className="details__row__title">Long Breaks</div>
                    <ProgressBar totalSections={2} completedSections={completedCycles.longBreak} completedColor="#125083" currentColors={currentColors} />
                </div>
            </div>

            <style jsx>{`
                .details {
                    font-size: 2rem;
                }

                .details__row {
                    margin: 2rem 0;
                }

                .details__row__title {
                    text-align: center;
                    margin-bottom: 0.5rem;
                    color: ${currentColors[ 2 ]};
                }


                /* For Desktop */
                @media only screen and (min-width: 550px) {
                    .details {
                        display: flex;
                    }
                }

            `}</style>
        </React.Fragment>
    );
};

export default FocusDetails;