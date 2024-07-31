
import style from './Error.module.scss';

export default function Error() {
    return (
        <div className={style.error__wrap}>
            <h1 data-t="404" className={style.error__text}>404</h1>
        </div>
    );
}
