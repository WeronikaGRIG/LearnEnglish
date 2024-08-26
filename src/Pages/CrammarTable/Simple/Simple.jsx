
import dataTenses from '../../../Common/dataTensens.json';

export default function Simple() {
    const { simple } = dataTenses;

    const renderTextWithStyles = (textArray) => {
        return textArray.map((item, index) => (
            <span key={index} className={item.className}>{item.text}</span>
        ));
    };

    return (
        <div>
            <h2>Simple Tenses</h2>
            <p>Простое времена</p>

            <table>
                <thead>
                    <tr>
                        <th>Tenses</th>
                        <th>Вопрос</th>
                        <th>Утверждение</th>
                        <th>Отрицание</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(simple).map(time => (
                        <tr key={time}>
                            <td>{time}</td>
                            <td>{Array.isArray(simple[time].question) ? renderTextWithStyles(simple[time].question) : simple[time].question}</td>
                            <td>{Array.isArray(simple[time].affirmative) ? renderTextWithStyles(simple[time].affirmative) : simple[time].affirmative}</td>
                            <td>{Array.isArray(simple[time].negative) ? renderTextWithStyles(simple[time].negative) : simple[time].negative}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
