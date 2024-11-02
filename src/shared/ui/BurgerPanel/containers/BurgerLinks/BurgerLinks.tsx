import { ReactNode } from 'react';
import styles from './BurgerLinks.module.scss';

interface BurgerLinksProps {
  children: ReactNode;
  className?: string;
}

export function BurgerLinks({ children, className }: Readonly<BurgerLinksProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <div className={styles.BurgerLinks + externalClass}>{children}</div>;
}
