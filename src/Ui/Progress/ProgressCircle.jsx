import PropTypes from 'prop-types';
import style from './ProgressCircle.module.scss';

export default function ProgressCircle({ learned, total }) {

    const radius = 80;
    const stroke = 10;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (learned / total) * circumference;

    return (
        <div className={style.progressCircle}>
            <svg
                height={radius * 2}
                width={radius * 2}
            >
                <circle
                    stroke="black"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    fill="black"
                    fontSize="20"
                >
                    {learned}/{total}
                </text>
            </svg>
        </div>
    );
}

ProgressCircle.propTypes = {
    learned: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
};
