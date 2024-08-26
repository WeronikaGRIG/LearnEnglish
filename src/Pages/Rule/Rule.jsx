import Container from '../../Ui/Container/Container';
import Content from '../../Ui/Content/Content';
import Simple from '../CrammarTable/Simple/Simple';
import RulesCard from './RulesCard';
// import style from './Rule.module.scss';

export default function Rule() {
    return (
        <main>
            <Container>
                <Content title='Учить правило'>
                    <RulesCard />
                    <Simple />
                </Content>
            </Container>
        </main>
    );
}
