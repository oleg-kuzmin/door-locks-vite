import { ElementNumber } from './ElementNumber';
import { ElementText } from './ElementText';
import styles from './StatisticsElement.module.scss';

interface StatisticsElementProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function StatisticsElement({ title, subtitle, className }: Readonly<StatisticsElementProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <li className={styles.StatisticsElement + externalClass}>
      <ElementNumber text={title} />
      <ElementText text={subtitle} />
    </li>
  );
}
