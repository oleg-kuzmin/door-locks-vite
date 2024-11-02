import { ReactNode } from 'react';
import styles from './CatalogList.module.scss';

interface CatalogListProps {
  children: ReactNode;
  className?: string;
}

export function CatalogList({ children, className }: Readonly<CatalogListProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <ul className={styles.CatalogList + externalClass}>{children}</ul>;
}
