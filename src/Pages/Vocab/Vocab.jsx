
import style from './Vocab.module.scss';

export default function Vocab() {
    return (
        <main>
            <div className={style.container}>

                <div className={style.wrapper}>
                    <h3 className={style.title}>Слова</h3>
                    <div className={style.vocabs__wrapper}>
                        <ul className={style.vocab}>

                        </ul>

                    </div>
                </div>
            </div>
        </main>
    );
}
