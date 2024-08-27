import dataPerfect from '../../Common/dataPerfect.json';
import Container from '../../Ui/Container/Container';
import Content from '../../Ui/Content/Content';
import TableTense from '../../Ui/TableTense/TableTense';
import style from './GrammarTable.module.scss';

export default function Perfect() {
    const { perfect } = dataPerfect;

    return (
        <main>
            <Container>
                <Content>
                    <TableTense
                        data={perfect}
                        style={style}
                        title='Perfect Tenses'
                        description='Настоящие совершенные времена' />
                </Content>
            </Container>
        </main>

    );
}
