
import style from './Header.module.scss';


export default function Header() {
    return (
        <header>
            <div className={style.container}>
                <h1 className={style.title}>
                    <strong>Learn English <em>with Me</em></strong>
                </h1>
                <p className={style.text}>Приготовтесь к увлекательному путешествию по изучению английского языка!</p>
            </div>
        </header>
    );
}
