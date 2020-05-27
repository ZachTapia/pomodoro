import ProgressBar from './ProgressBar';

const FocusDetails = ({ completedCycles }) => {

    return (
        <React.Fragment>
            <div className="details">
                <div className="details__row">
                    <div className="details__row__title">Pomodoros</div>
                    <ProgressBar totalSections={4} completedSections={completedCycles.pomodoro} completedColor="#800202" />
                </div>

                <div className="details__row">
                    <div className="details__row__title"> Short Breaks</div>
                    <ProgressBar totalSections={4} completedSections={completedCycles.shortBreak} completedColor="#508312" />
                </div>

                <div className="details__row">
                    <div className="details__row__title">Long Breaks</div>
                    <ProgressBar totalSections={2} completedSections={completedCycles.longBreak} completedColor="#125083" />
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
                }


                /* For Desktop */
                @media only screen and (min-width: 900px) {
                    .details {
                        display: flex;
                    }
                }

            `}</style>
        </React.Fragment>
    );
};

export default FocusDetails;