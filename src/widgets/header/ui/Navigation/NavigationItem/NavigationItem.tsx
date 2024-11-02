import { ReactNode } from 'react';
import styles from './NavigationItem.module.scss';

interface NavigationItemProps {
  children: ReactNode;
  className?: string;
}

export function NavigationItem({ children, className }: Readonly<NavigationItemProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <li className={styles.NavigationItem + externalClass}>{children}</li>;
}
