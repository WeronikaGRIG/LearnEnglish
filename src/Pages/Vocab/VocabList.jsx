import PropTypes from 'prop-types';
import { useState } from 'react';
import style from './VocabList.module.scss';

export default function VocabList({ word, transcript, translation }) {

    const [hoverVocab, setHoverVocab] = useState(true);
    const [translationShown, setTranslationShown] = useState(false)

    const handleClick = () => {
        setHoverVocab(!hoverVocab);
        if (!translationShown) {
            setTranslationShown(true);
        }
    };

    return (
        <li className={style.vocab__list}>
            <h3 className={style.vocab__list_word}>{word}</h3>
            <p className={style.vocab__list_transcript}>{transcript}</p>
            <p className={hoverVocab ? style.vocab__list_translation : style.vocab__check}> {translation} </p>
            <button
                className={style.vocab__list_chek}
                onClick={handleClick}>
                Проверить
            </button>
        </li>
    );
}

VocabList.propTypes = {
    word: PropTypes.string.isRequired,
    transcript: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
};