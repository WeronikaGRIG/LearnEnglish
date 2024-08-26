import Container from '../../Ui/Container/Container';
import Content from '../../Ui/Content/Content';
import Continuous from '../CrammarTable/Continuous/Continuous';
import Simple from '../CrammarTable/Simple/Simple';
import Perfect from '../CrammarTable/Perfect/Perfect';
import RulesCard from './RulesCard';
// import style from './Rule.module.scss';

export default function Rule() {
    return (
        <main>
            <Container>
                <Content title='Учить правило'>
                    <RulesCard />
                    <Simple />
                    <Continuous />
                    <Perfect />
                </Content>
            </Container>
        </main>
    );
}
