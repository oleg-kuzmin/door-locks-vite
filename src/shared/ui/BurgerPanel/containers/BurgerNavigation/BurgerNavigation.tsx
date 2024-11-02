import { ReactNode } from 'react';
import styles from './BurgerNavigation.module.scss';

interface BurgerNavigationProps {
  children: ReactNode;
  className?: string;
}

export function BurgerNavigation({ children, className }: Readonly<BurgerNavigationProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <nav className={styles.BurgerNavigation + externalClass}>{children}</nav>;
}
