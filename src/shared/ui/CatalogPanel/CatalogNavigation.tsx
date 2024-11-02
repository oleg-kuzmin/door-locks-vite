import { ReactNode } from 'react';
import styles from './CatalogNavigation.module.scss';

interface CatalogNavigationProps {
  children: ReactNode;
  className?: string;
}

export function CatalogNavigation({ children, className }: Readonly<CatalogNavigationProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <nav className={styles.CatalogNavigation + externalClass}>{children}</nav>;
}
