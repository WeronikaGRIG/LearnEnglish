import PropTypes from 'prop-types';
import { useState } from 'react';
import style from './FormWord.module.scss';

export default function FormWord({ addWord, onClose }) {
    const [word, setWord] = useState('');
    const [transcript, setTranscript] = useState('');
    const [translation, setTranslation] = useState('');
    const [errors, setErrors] = useState({});

    const validateWord = (value) => {
        const regex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
        return regex.test(value);
    };

    const validateTranscript = (value) => {
        const regex = /^[a-zA-Z[\]/()+']+$/;
        return regex.test(value);
    };

    const validateTranslation = (value) => {
        const regex = /^[а-яА-Я]+(?:-[а-яА-Я]+)*$/;
        return regex.test(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!validateWord(word)) newErrors.word = 'Invalid word format';
        if (!validateTranscript(transcript)) newErrors.transcript = 'Invalid transcript format';
        if (!validateTranslation(translation)) newErrors.translation = 'Invalid translation format';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        addWord({ word, transcript, translation });
        setWord('');
        setTranscript('');
        setTranslation('');
        setErrors({});
    };

    const handleChange = (setter) => (e) => {
        setter(e.target.value);
        setErrors({});
    };

    return (
        <div className={style.modalOverlay}>
            <div className={style.modalContent}>
                <button className={style.closeButton} onClick={onClose}>×</button>
                <form className={style.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Word"
                        value={word}
                        onChange={handleChange(setWord)}
                        required
                    />
                    {errors.word && <span className={style.error}>{errors.word}</span>}

                    <input
                        type="text"
                        placeholder="Transcript"
                        value={transcript}
                        onChange={handleChange(setTranscript)}
                        required
                    />
                    {errors.transcript && <span className={style.error}>{errors.transcript}</span>}
                    <input
                        type="text"
                        placeholder="Translation"
                        value={translation}
                        onChange={handleChange(setTranslation)}
                        required
                    />
                    {errors.translation && <span className={style.error}>{errors.translation}</span>}
                    <button type="submit">Add Word</button>
                </form>
            </div>
        </div>
    );
}

FormWord.propTypes = {
    addWord: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};