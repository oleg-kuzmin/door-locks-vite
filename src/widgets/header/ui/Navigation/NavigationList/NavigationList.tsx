import { ReactNode } from 'react';
import styles from './NavigationList.module.scss';

interface NavigationListProps {
  children: ReactNode;
  className?: string;
}

export function NavigationList({ children, className }: Readonly<NavigationListProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <ul className={styles.NavigationList + externalClass}>{children}</ul>;
}
