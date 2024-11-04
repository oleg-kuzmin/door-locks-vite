import { ReactNode } from 'react';
import styles from './AdvantagesList.module.scss';

interface AdvantagesListProps {
  children: ReactNode;
  className?: string;
}

export function AdvantagesList({ children, className }: Readonly<AdvantagesListProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <ul className={styles.AdvantagesList + externalClass}>{children}</ul>;
}
