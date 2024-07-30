
import Header from '../../Components/Header/Header';
import style from './Home.module.scss';
import HomeCard from './HomeCard';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <div className={style.container}>
                    <div className={style.content}>
                        <h3 className={style.title}>Выбери технику изучения</h3>
                        <div className={style.cards}>
                            <HomeCard />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
