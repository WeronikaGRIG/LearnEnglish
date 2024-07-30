
import datas from '../../Common/datas.json';
import HomeList from './HomeList';
import style from './HomeCard.module.scss';

export default function HomeCard() {
    return (
        <ul className={style.card}>
            {datas.map((data, i) => {
                return (
                    <HomeList key={i} {...data} />
                )
            })}
        </ul>
    );
}
