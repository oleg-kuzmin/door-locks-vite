import { ReactNode } from 'react';
import styles from './BurgerPanelContent.module.scss';

interface BurgerPanelContentProps {
  children: ReactNode;
  className?: string;
}

export function BurgerPanelContent({ children, className }: Readonly<BurgerPanelContentProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <div className={styles.BurgerPanelContent + externalClass}>{children}</div>;
}
