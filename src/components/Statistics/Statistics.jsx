import PropTypes from 'prop-types';
import {
  StatisticsWrapper,
  StatisticsList,
  StatisticsListItem,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <StatisticsWrapper>
        <section class="statistics">
          {title && <h2 className="title">{title}</h2>}
          <StatisticsList>
            {stats.map(stat => (
              <StatisticsListItem key={stat.id} className="item">
                <span className="label">{stat.label}</span>
                <span className="percentage">{stat.percentage}%</span>
              </StatisticsListItem>
            ))}
          </StatisticsList>
        </section>
      </StatisticsWrapper>
    </>
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
  ).isRequired,
};
