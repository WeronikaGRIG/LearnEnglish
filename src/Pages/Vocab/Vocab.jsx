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
    return (
        <main>
            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.title}>Учить слова</h3>

                    <div>
                        <img src={arrowBack} alt="Arrow Back" />
                        <img src={addCircle} alt="Add Circle" />
                    </div>

                    <div className={style.vocabs}>
                        <img src={caretBack} alt="Caret Back" />
                        <img src={caretForward} alt="Caret Forward" />
                        <ul className={style.vocab}>
                            {lists.map((list, index) => (
                                <VocabList
                                    key={index} {...list} />
                            ))}
                        </ul>
                    </div>

                    <div>
                        <img src={sad} alt="Sad smile" />
                        <img src={happy} alt="Happy smile" />
                    </div>
                </div>
            </div>
        </main>
    );
}
