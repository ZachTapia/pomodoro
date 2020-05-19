import ProgressBar from './ProgressBar';

const FocusDetails = () => {
    return (
        <React.Fragment>
            <div className="details">
                <div className="details__row">
                    Pomodoros:
                    <ProgressBar />
                </div>
                <div className="details__row">
                    Short Breaks:
                    <ProgressBar />
                </div>
                <div className="details__row">
                    Long Breaks:
                    <ProgressBar />
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