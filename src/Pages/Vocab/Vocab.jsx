import { useState } from 'react';
import lists from '../../Common/lists.json';

import VocabList from './VocabList';
import Button from '../../Ui/Button/Button';
import Progress from '../../Ui/Progress/Progress';
import style from './Vocab.module.scss';

import arrowBack from '../../assets/icons/arrowBack.svg';
import addCircle from '../../assets/icons/addCircle.svg';
import caretBack from '../../assets/icons/caretBack.svg';
import caretForward from '../../assets/icons/caretForward.svg';



export default function Vocab() {

    const [currentIndex, setCurrentIndex] = useState(0);

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

                        <Button
                            onClick={handlePrev}
                            title="Previous">
                            <img src={caretBack} alt="Caret Back" />
                        </Button>

                        <ul className={style.vocab}>
                            <VocabList
                                key={currentIndex} {...lists[currentIndex]} />
                        </ul>

                        <Button
                            onClick={handleNext}
                            title="Next">
                            <img src={caretForward} alt="Caret Forward" />
                        </Button>
                    </div>

                    <Progress />
                </div>
            </div>
        </main>
    );
}
