import { useState } from 'react';
import lists from '../../Common/lists.json';
import VocabList from './VocabList';
import style from './Vocab.module.scss';

import arrowBack from '../../assets/icons/arrowBack.svg';
import addCircle from '../../assets/icons/addCircle.svg';
import caretBack from '../../assets/icons/caretBack.svg';
import caretForward from '../../assets/icons/caretForward.svg';
import sad from '../../assets/icons/sad.svg';
import happy from '../../assets/icons/happy.svg';

export default function Vocab() {

    const [currentIndex, setCurrentIndex] = useState(0);

    {/* вынести в отдельный компонент Progress */ }
    const [sadCount, setSadCount] = useState(0);
    const [happyCount, setHappyCount] = useState(0);

    const incrementSadCount = () => {
        setSadCount(sadCount + 1);
    };

    const incrementHappyCount = () => {
        setHappyCount(happyCount + 1);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : lists.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < lists.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <main>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.toolbar}>
                        <img src={arrowBack} alt="Arrow Back" />
                        <h3 className={style.title}>Учить слова</h3>
                        <img src={addCircle} alt="Add Circle" />
                    </div>

                    <div className={style.vocabs}>
                        <button
                            onClick={handlePrev}>
                            <img src={caretBack} alt="Caret Back" />
                        </button>
                        <ul className={style.vocab}>
                            <VocabList
                                key={currentIndex} {...lists[currentIndex]} />
                        </ul>
                        <button
                            onClick={handleNext}>
                            <img src={caretForward} alt="Caret Forward" />
                        </button>
                    </div>

                    {/* вынести в отдельный компонент UI/Progress */}
                    <div className={style.progress}>
                        <div className={style.counter} onClick={incrementSadCount}>
                            <span className={style.tooltip}>{sadCount}</span>
                            <img src={sad} alt="Sad smile" />
                        </div>
                        <div className={style.counter} onClick={incrementHappyCount}>
                            <span className={style.tooltip}>{happyCount}</span>
                            <img src={happy} alt="Happy smile" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
