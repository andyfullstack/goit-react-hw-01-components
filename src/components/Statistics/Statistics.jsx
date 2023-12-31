import styles from './Statistics.module.css';
import { randomColor } from '../../color/color';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.stats__list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={styles.stats}
              key={id}
              style={{ backgroundColor: randomColor() }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
