import ProgressBar from './ProgressBar';

const FocusDetails = ({ completedCycles }) => {

    return (
        <React.Fragment>
            <div className="details">
                <div className="details__row">
                    Pomodoros:
                    <ProgressBar totalSections={4} completedSections={completedCycles.pomodoro} completedColor="#800202" />
                </div>
                <div className="details__row">
                    Short Breaks:
                    <ProgressBar totalSections={4} completedSections={completedCycles.shortBreak} completedColor="#508312" />
                </div>
                <div className="details__row">
                    Long Breaks:
                    <ProgressBar totalSections={2} completedSections={completedCycles.longBreak} completedColor="#125083" />
                </div>
            </div>

            <style jsx>{`
                .details {
                    font-size: 2rem;
                }

                .details__row {
                    display: flex;
                    margin: 1rem 0;
                }

            `}</style>
        </React.Fragment>
    );
};

export default FocusDetails;