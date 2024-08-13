import { useCallback, useState, useMemo } from 'react';
import lists from '../../Common/lists.json';

import VocabList from './VocabList';
import Button from '../../Ui/Button/Button';
import FormWord from '../../Ui/Forms/FormWord';
import Progress from '../../Ui/Progress/Progress';
import style from './Vocab.module.scss';

import arrowBack from '../../assets/icons/arrowBack.svg';
import addCircle from '../../assets/icons/addCircle.svg';
import caretBack from '../../assets/icons/caretBack.svg';
import caretForward from '../../assets/icons/caretForward.svg';

export default function Vocab() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [learnCards, setLearningCards] = useState(0);
    const [wordList, setWordList] = useState(lists);
    const [showAddForm, setShowAddForm] = useState(false);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : wordList.length - 1));
    }, [wordList.length]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex < wordList.length - 1 ? prevIndex + 1 : 0));
    }, [wordList.length]);

    const handleHappyClick = useCallback(() => {
        setLearningCards((l) => l + 1);
    }, []);

    const handleAddWords = useCallback((newWord) => {
        setWordList((prevWordList) => [...prevWordList, newWord]);
        setShowAddForm(false);
    }, []);

    const currentWord = useMemo(() => wordList[currentIndex], [wordList, currentIndex]);

    return (
        <main>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.toolbar}>
                        <Button>
                            <img src={arrowBack} alt="Arrow Back" />
                        </Button>

                        <h3 className={style.title}>Учить слова</h3>

                        <Button
                            onClick={() => setShowAddForm(!showAddForm)}>
                            <img src={addCircle} alt="Add Circle" />
                        </Button>
                    </div>

                    {showAddForm &&
                        <FormWord
                            addWord={handleAddWords}
                            onClose={() => setShowAddForm(false)} />}

                    <div className={style.vocabs}>
                        <Button
                            aria-label='Previous'
                            onClick={handlePrev}>
                            <img src={caretBack} alt="Caret Back" />
                        </Button>

                        <ul className={style.vocab}>
                            <VocabList
                                key={currentIndex} {...currentWord} />
                        </ul>

                        <Button
                            aria-label='Next'
                            onClick={handleNext}>
                            <img src={caretForward} alt="Caret Forward" />
                        </Button>
                    </div>

                    <Progress
                        learnCards={learnCards}
                        totalCards={wordList.length}
                        handleHappyClick={handleHappyClick} />
                </div>
            </div>
        </main>
    );
}

