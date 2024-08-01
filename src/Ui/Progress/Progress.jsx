import PropTypes from 'prop-types';
import { useState } from 'react';
import ProgressCircle from './ProgressCircle';
import style from './Progress.module.scss';

import sad from '../../assets/icons/sad.svg';
import happy from '../../assets/icons/happy.svg';


export default function Progress({ learnCards, totalCards, handleHappyClick }) {

    const [sadCount, setSadCount] = useState(0);
    const [happyCount, setHappyCount] = useState(0);


    const incrementSadCount = () => {
        setSadCount(sadCount + 1);
    };

    const incrementHappyCount = () => {
        setHappyCount(happyCount + 1);
        handleHappyClick();
    };

    return (
        <div className={style.progress}>
            <div className={style.counter} onClick={incrementSadCount}>
                <span className={style.tooltip}>{sadCount}</span>
                <div className={style.circle}>
                    <img src={sad} alt="Sad smile" />
                </div>
            </div>
            <ProgressCircle
                learned={learnCards}
                total={totalCards} />
            <div className={style.counter} onClick={incrementHappyCount}>
                <span className={style.tooltip}>{happyCount}</span>
                <div className={style.circle}>
                    <img src={happy} alt="Happy smile" />
                </div>
            </div>
        </div>
    );
}

Progress.propTypes = {
    learnCards: PropTypes.string.isRequired,
    totalCards: PropTypes.string.isRequired,
    handleHappyClick: PropTypes.string.isRequired,
};
