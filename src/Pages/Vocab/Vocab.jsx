import { useContext, useCallback, useEffect, useState, useMemo } from 'react';
import { useGetWordsQuery, useAddWordMutation } from '../../store/wordsApi';

import { ErrorContext } from '../../contexts/ErrorContext';
import { LoaderContext } from '../../contexts/LoaderContext';

import Container from '../../Ui/Container/Container';
import Content from '../../Ui/Content/Content';
import VocabList from './VocabList';
import Button from '../../Ui/Button/Button';
import FormWord from '../../Ui/Forms/FormWord';
import Progress from '../../Ui/Progress/Progress';
import style from './Vocab.module.scss';

import arrowBack from '../../assets/icons/arrowBack.svg';
import caretBack from '../../assets/icons/caretBack.svg';
import caretForward from '../../assets/icons/caretForward.svg';

export default function Vocab() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [learnCards, setLearningCards] = useState(0);
    const [showAddForm, setShowAddForm] = useState(false);
    const [animationClass, setAnimationClass] = useState('');

    const { setError } = useContext(ErrorContext);
    const { setIsLoading } = useContext(LoaderContext)
    const { data: wordList = [], isLoading, error } = useGetWordsQuery();
    const [addWord] = useAddWordMutation();

    useEffect(() => {
        setIsLoading(isLoading);
        if (error) {
            setError(error);
        }
    }, [isLoading, error, setIsLoading, setError]);

    const handlePrev = useCallback(() => {
        setAnimationClass('slide-left');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : wordList.length - 1));
            setAnimationClass('');
        }, 500);
    }, [wordList.length]);

    const handleNext = useCallback(() => {
        setAnimationClass('slide-right');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex < wordList.length - 1 ? prevIndex + 1 : 0));
            setAnimationClass('');
        }, 500);

    }, [wordList.length]);

    const handleHappyClick = useCallback(() => {
        if (learnCards < wordList.length) {
            setLearningCards((l) => l + 1);
        }
    }, [learnCards, wordList.length]);

    const handleAddWords = useCallback(async (newWord) => {
        await addWord(newWord);
        setShowAddForm(false);
    }, [addWord]);

    const currentWord = useMemo(() => wordList[currentIndex], [wordList, currentIndex]);

    if (isLoading) return null;
    if (error) return null;

    return (
        <main>
            <Container>
                <Content title='Учить слова'>
                    <div className={style.toolbar}>
                        <Button>
                            <img src={arrowBack} alt="Arrow Back" />
                        </Button>
                        <Button
                            onClick={() => setShowAddForm(!showAddForm)}>
                            &#10010;
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

                        <ul className={`${style.vocab} ${style[animationClass]}`}>
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
                </Content>
            </Container>
        </main>
    );
}

