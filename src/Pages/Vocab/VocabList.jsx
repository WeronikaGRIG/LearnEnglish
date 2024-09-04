import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../../Ui/Button/Button'
import style from './VocabList.module.scss';

export default function VocabList({ word, translation }) {

    const [translationShown, setTranslationShown] = useState(false)

    const handleClick = () => {

        setTranslationShown(!translationShown);
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
};