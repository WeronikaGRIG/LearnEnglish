
import dataRules from '../../Common/dataRules.json';
import RuleList from './RuleList';
import style from './RulesCard.module.scss';

export default function RuleCard() {
    return (
        <ul className={style.cards}>
            {dataRules.map((dataRule, i) => {
                return (
                    <RuleList key={i} {...dataRule} />
                )
            })}
        </ul>
    );
}