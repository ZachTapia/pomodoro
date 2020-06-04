const ColorsDrawerItem = ({ title, rowOneColor, rowTwoColor, rowThreeColor, colorChangeHandler }) => {
    return (
        <React.Fragment>
            <div className="colors-drawer__item" onClick={() => colorChangeHandler(title)}>
                <div className="colors-drawer__item__preview-block">
                    <div className="colors-drawer__item__preview-block__row colors-drawer__item__preview-block__row--one"></div>
                    <div className="colors-drawer__item__preview-block__row colors-drawer__item__preview-block__row--two"></div>
                    <div className="colors-drawer__item__preview-block__row colors-drawer__item__preview-block__row--three"></div>
                </div>
                <div className="colors-drawer__item__title">{title}</div>
            </div>
            <style jsx>{`

                /* For Mobile */
                .colors-drawer__item__title {
                    display: none;
                }

                .colors-drawer__item {
                    display: flex;
                    align-items: center;
                }

                .colors-drawer__item__preview-block {
                    display: flex;
                    flex-direction: column;
                    height: 6vh;
                    width: 12vw;
                    border: 0.5rem solid black;
                    border-radius: 1rem;
                }

                .colors-drawer__item__preview-block__row {
                    width: 100%;
                    height: 33%;
                }

                .colors-drawer__item__preview-block__row--one {
                    background-color: ${rowOneColor};
                }

                .colors-drawer__item__preview-block__row--two {
                    background-color: ${rowTwoColor};
                }

                .colors-drawer__item__preview-block__row--three {
                    background-color: ${rowThreeColor};
                }

                /* For Desktop */
                @media only screen and (min-width: 550px) {
                    .colors-drawer__item__title {
                        display: initial;
                    }

                    .colors-drawer__item {
                        cursor: pointer;
                    }

                    .colors-drawer__item__preview-block {
                        width: 6vw;
                        margin-right: 1vw;
                    }
                }

            `}</style>
        </React.Fragment>
    );
};

export default ColorsDrawerItem;