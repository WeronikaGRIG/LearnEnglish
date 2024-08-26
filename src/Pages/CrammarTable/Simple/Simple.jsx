
import dataTenses from '../../../Common/dataTensens.json';
import style from './Simple.module.scss';

export default function Simple() {
    const { simple } = dataTenses;

    const renderTextWithStyles = (textArray) => {
        return textArray.map((item, index) => (
            <span key={index} className={item.className}>{item.text}</span>
        ));
    };

    return (
        <>
            <h2 className={style.title}>Simple Tenses</h2>
            <p className={style.descr}>Простое времена</p>

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
                    {Object.keys(simple).map(time => (
                        <tr key={time}
                            className={style.table__body_row}>
                            <td className={style.cellFirst}>{time}</td>
                            <td className={style.cell}>{Array.isArray(simple[time].question) ? renderTextWithStyles(simple[time].question) : simple[time].question}</td>
                            <td className={style.cell}>{Array.isArray(simple[time].affirmative) ? renderTextWithStyles(simple[time].affirmative) : simple[time].affirmative}</td>
                            <td className={style.cell}>{Array.isArray(simple[time].negative) ? renderTextWithStyles(simple[time].negative) : simple[time].negative}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
