import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './HomeList.module.scss';


export default function HomeList({ img, link, title, description }) {
    return (
        <Link to={link}>
            <li className={style.list}>
                <img src={img} alt={title} className={style.list__img} />
                <h2 className={style.list__title}>{title}</h2>
                <p className={style.list__descr}>{description}</p>
            </li >
        </Link>
    );
}

HomeList.propTypes = {
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
