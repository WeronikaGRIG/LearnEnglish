import PropTypes from 'prop-types';
import style from './Card.module.scss';

export default function Card({ children }) {
    return (
        <li className={style.card}>
            {children}
        </li>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
}