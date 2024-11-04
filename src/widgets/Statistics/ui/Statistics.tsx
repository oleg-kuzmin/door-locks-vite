import { StatisticsElement } from './StatisticsElement';
import { StatisticsList } from './StatisticsList';
import styles from './Statistics.module.scss';

interface StatisticsProps {
  className?: string;
}

export function Statistics({ className }: Readonly<StatisticsProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.Statistics + externalClass}>
      <StatisticsList>
        <StatisticsElement title="5,567" subtitle="Счастливых клиентов" />
        <StatisticsElement title="1245" subtitle="Продуктов на выбор" />
        <StatisticsElement title="372" subtitle="Продаж в день" />
        <StatisticsElement title="20" subtitle="Лет на рынке" />
      </StatisticsList>
    </div>
  );
}
