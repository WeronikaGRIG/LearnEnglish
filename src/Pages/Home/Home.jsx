import Container from '../../Ui/Container/Container';
import Content from '../../Ui/Content/Content';
import Header from '../../Components/Header/Header';
import HomeCard from './HomeCard';

import style from './Home.module.scss';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <Content title='Выбери технику изучения'>
                        <div className={style.cards}>
                            <HomeCard />
                        </div>
                    </Content>
                </Container>
            </main>
        </>
    );
}
