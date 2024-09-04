import Container from '../../Ui/Container/Container';
import Content from '../../Ui/Content/Content';
import ButtonBack from '../../Ui/Button/ButtonBack';
import RulesCard from './RulesCard';


export default function Rule() {
  return (
    <main>
      <Container>
        <Content title='Учить правило'>
          <ButtonBack />
          <RulesCard />
        </Content>
      </Container>
    </main>
  );
}
