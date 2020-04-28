import style from '../sass/DrawerToggleButton.module.scss';

const DrawerToggleButton = (props) => {
    let { drawerToggleHandler } = props;

    return (
        <button className={style.ToggleButton} onClick={drawerToggleHandler}>
            <div className={style.ToggleButtonLine}></div>
            <div className={style.ToggleButtonLine}></div>
            <div className={style.ToggleButtonLine}></div>
        </button>
    );
};

export default DrawerToggleButton;