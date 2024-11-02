import { ReactNode } from 'react';
import styles from './BurgerList.module.scss';

interface BurgerListProps {
  children: ReactNode;
  className?: string;
}

export function BurgerList({ children, className }: Readonly<BurgerListProps>) {
  const externalClass = className ? ` ${className}` : '';
  return (
    <nav>
      <ul className={styles.BurgerList + externalClass}>{children}</ul>
    </nav>
  );
}
