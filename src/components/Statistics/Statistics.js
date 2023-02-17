import PropTypes from 'prop-types';
import getRandomHexColor from '../randomColor';
import style from './Statistics.module.css';

export default function Statistics(props) {
    const { title, stats } = props;

    return (
        <section className={style.statistics}>
            {title && <h2 className={style.title}>{title}</h2>}            

            <ul className={style.statList}>
                {stats.map(stat => <li className={style.item} key={stat.id} style={{
                    backgroundColor: getRandomHexColor(),
                    
                }}>
                    <span className={style.label}>{stat.label}</span>
                    <span className={style.percentage}>{stat.percentage}%</span>
                </li>)}
            </ul>
        </section>
    );
};


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};