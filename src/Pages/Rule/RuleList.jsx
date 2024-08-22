
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './RuleList.module.scss';


export default function RuleList({ link, title, description }) {
    return (
        <Link to={link}>
            <li className={style.list}>
                <h2 className={style.list__title}>{title}</h2>
                <p className={style.list__descr}>{description}</p>
            </li >
        </Link>
    );
}

RuleList.propTypes = {
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
