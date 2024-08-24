
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../../Ui/Card/Card';
import Button from '../../Ui/Button/Button';
import style from './RuleList.module.scss';


export default function RuleList({ link, title, description }) {
    return (
        <Link to={link}>
            <Card >
                <h2 className={style.title}>{title}</h2>
                <p className={style.descr}>{description}</p>
                <Button>Учить</Button>
            </Card >
        </Link>
    );
}

RuleList.propTypes = {
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
