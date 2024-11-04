import { ReactNode } from 'react';
import styles from './StatisticsList.module.scss';

interface StatisticsListProps {
  children: ReactNode;
  className?: string;
}

export function StatisticsList({ children, className }: Readonly<StatisticsListProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <ul className={styles.StatisticsList + externalClass}>{children}</ul>;
}
