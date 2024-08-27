import PropTypes from "prop-types";

export default function TableTense({ title, description, data, style }) {

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
            <h2 className={style.title}>{title}</h2>
            <p className={style.descr}>{description}</p>

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
                    {Object.keys(data).map(time => (
                        <tr key={time}
                            className={style.table__body_row}>
                            <td className={style.cellFirst}>{time}</td>
                            <td className={style.cell}>{renderCell(data[time].question)}</td>
                            <td className={style.cell}>{renderCell(data[time].affirmative)}</td>
                            <td className={style.cell}>{renderCell(data[time].negative)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

TableTense.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    style: PropTypes.string.isRequired,
}
