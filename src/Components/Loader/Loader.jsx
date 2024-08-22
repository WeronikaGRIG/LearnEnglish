import { useContext } from 'react';
import { LoaderContext } from '../../contexts/LoaderContext';
import style from './Loader.module.scss';

export default function Loader() {

    const { isLoading } = useContext(LoaderContext);

    if (!isLoading) return null;

    return (
        <div className={style.container}>
            <span className={style.loader}></span>
            <div className={style.loading}></div>
        </div>
    );
}
