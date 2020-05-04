const DrawerToggleButton = (props) => {
    let { drawerToggleHandler } = props;

    return (
        <div>
            <button className="toggle-button" onClick={drawerToggleHandler}>
                <div className="toggle-button__line"></div>
                <div className="toggle-button__line"></div>
                <div className="toggle-button__line"></div>
            </button>

            <style jsx>{`
                .toggle-button {
                    margin: 0 1rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    height: 4rem;
                    width: 4rem;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                }

                .toggle-button:focus {
                    outline: none;
                }

                .toggle-button__line {
                    width: 4rem;
                    height: 0.4rem;
                    background: white;
                }

            `}</style>
        </div>
    );
};

export default DrawerToggleButton;