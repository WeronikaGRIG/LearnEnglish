import dataContinuous from '../../Common/dataContinuous.json';
import Container from '../../Ui/Container/Container';
import Content from '../../Ui/Content/Content';
import ButtonBack from '../../Ui/Button/ButtonBack';
import TableTense from '../../Ui/TableTense/TableTense';
import style from './GrammarTable.module.scss';

export default function Continuous() {
  const { continuous } = dataContinuous;

  return (
    <main>
      <Container>
        <Content>
          <ButtonBack />
          <TableTense
            data={continuous}
            style={style}
            title='Continuous Tenses'
            description='Настоящие длительные времена' />
        </Content>
      </Container>
    </main>
  );
}
