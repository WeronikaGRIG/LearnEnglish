import PropTypes from 'prop-types';
import style from './Button.module.scss';

export default function Button({ onClick, title, children }) {
    return (
        <button
            className={style.button}
            onClick={onClick}
            title={title}>
            {children}
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};
