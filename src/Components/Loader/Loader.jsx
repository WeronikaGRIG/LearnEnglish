
import style from './Loader.module.scss';

export default function Loader() {
    return (
        <div className={style.container}>
            <span className={style.loader}></span>
            <div className={style.loading}></div>
        </div>
    );
}
