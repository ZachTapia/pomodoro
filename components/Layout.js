import style from '../sass/Layout.module.scss';

const Layout = (props) => {
    return (
        <div className={style.MainLayout}>
            {props.children}
        </div>
    );
};

export default Layout;