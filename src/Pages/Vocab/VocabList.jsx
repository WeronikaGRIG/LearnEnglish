import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../../Ui/Button/Button'
import style from './VocabList.module.scss';

export default function VocabList({ word, translation, handleLearned }) {

    const [translationShown, setTranslationShown] = useState(false)
    const [learned, setLearned] = useState(false);

    const handleClick = () => {
        if (!translationShown) {
            setTranslationShown(true);
            if (!learned) {
                handleLearned();
                setLearned(true);
            }
        } else {
            setTranslationShown(false);
        }
    };

    return (
        <li className={style.vocab__list}>
            <h3 className={style.vocab__list_word}>{word}</h3>
            {translationShown && (
                <p className={style.vocab__list_translation}>{translation}</p>
            )}
            <Button
                onClick={handleClick}>
                {translationShown ? 'Скрыть' : 'Проверить'}
            </Button>
        </li>
    );
}

VocabList.propTypes = {
    word: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
    handleLearned: PropTypes.func.isRequired,
};