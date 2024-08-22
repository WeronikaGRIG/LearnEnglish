import { useContext } from 'react';
import { ErrorContext } from '../../contexts/ErrorContext';
import style from './Error.module.scss';

export default function Error() {
    const { error, clearError } = useContext(ErrorContext)

    if (!error) return null;

    return (
        <div className={style.error__wrap}>
            <h1 data-t="404" className={style.error__text}>404</h1>
            <button onClick={clearError}>Close</button>
        </div>
    );
}
