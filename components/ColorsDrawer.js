import ColorsDrawerItem from './ColorsDrawerItem';

const ColorsDrawer = ({ colorsDrawerOpen, colorChangeHandler }) => {
    return (
        <React.Fragment>
            <div className={colorsDrawerOpen ? "colors-drawer colors-drawer--open" : "colors-drawer"}>
                <ColorsDrawerItem title="Default" rowOneColor="#111" rowTwoColor="#2e2e2e" rowThreeColor="#e2e2e2" colorChangeHandler={colorChangeHandler} />
                <ColorsDrawerItem title="Beach" rowOneColor="#27496d" rowTwoColor="#f6cd61" rowThreeColor="#fe8a71" colorChangeHandler={colorChangeHandler} />
                <ColorsDrawerItem title="Deep" rowOneColor="#142850" rowTwoColor="#27496d" rowThreeColor="#34ebab" colorChangeHandler={colorChangeHandler} />
                <ColorsDrawerItem title="Mint" rowOneColor="#473a34" rowTwoColor="#998272" rowThreeColor="#bef798" colorChangeHandler={colorChangeHandler} />
                <ColorsDrawerItem title="Magma" rowOneColor="#6f0000" rowTwoColor="#ff5200" rowThreeColor="#ffcd3c" colorChangeHandler={colorChangeHandler} />
            </div>
            <style jsx>{`
                .colors-drawer {
                    width: 100%;
                    height: 10vh;
                    background-color: #2e2e2e;
                    display: flex;
                    border-bottom-right-radius: 2rem;
                    border-bottom-left-radius: 2rem;
                    justify-content: space-around;
                    align-items: center;
                    font-size: 2vw;
                    transform: translateY(-100%);
                    transition: all ease-out 400ms;
                }

                .colors-drawer--open {
                    transform: translateY(0);
                    transition: all ease-in 400ms;
                }

            `}</style>
        </React.Fragment>
    );
};

export default ColorsDrawer;