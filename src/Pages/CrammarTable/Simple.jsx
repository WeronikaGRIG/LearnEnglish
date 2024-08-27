import dataSimple from '../../Common/dataSimple.json';
import Container from '../../Ui/Container/Container';
import Content from '../../Ui/Content/Content';
import TableTense from '../../Ui/TableTense/TableTense';
import style from './GrammarTable.module.scss';



export default function Simple() {
    const { simple } = dataSimple;

    return (
        <main>
            <Container>
                <Content>
                    <TableTense
                        data={simple}
                        style={style}
                        title='Simple Tenses'
                        description='Простое настоящее' />
                </Content>
            </Container>
        </main>

    );
}
