import dataPerfect from '../../../Common/dataPerfect.json';
import style from './Perfect.module.scss';

export default function Perfect() {
    const { perfect } = dataPerfect;

    const renderTextWithStyles = (textArray) => {
        return textArray.map((item, index) => (
            <span key={index} className={item.className}>{item.text}</span>
        ));
    };

    const renderCell = (content) => {
        return Array.isArray(content) ? renderTextWithStyles(content) : content;
    };

    return (
        <>
            <h2 className={style.title}>Perfect Tenses</h2>
            <p className={style.descr}>Настоящие совершенные времена</p>

            <table className={style.table}>
                <thead className={style.table__header}>
                    <tr className={style.table__header_row}>
                        <th className={style.headerCell_first}>Tenses</th>
                        <th className={style.headerCell}>Вопрос</th>
                        <th className={style.headerCell}>Утверждение</th>
                        <th className={style.headerCell}>Отрицание</th>
                    </tr>
                </thead>
                <tbody className={style.table__body}>
                    {Object.keys(perfect).map(time => (
                        <tr key={time}
                            className={style.table__body_row}>
                            <td className={style.cellFirst}>{time}</td>
                            <td className={style.cell}>{renderCell(perfect[time].question)}</td>
                            <td className={style.cell}>{renderCell(perfect[time].affirmative)}</td>
                            <td className={style.cell}>{renderCell(perfect[time].negative)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
