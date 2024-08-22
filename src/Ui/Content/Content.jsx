import PropTypes from 'prop-types';
import style from './Content.module.scss';

export default function Content({ children, title }) {
    return (
        <div className={style.content}>
            {title && <h3 className={style.title}>{title}</h3>}
            {children}
        </div>
    );
}

Content.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
}
