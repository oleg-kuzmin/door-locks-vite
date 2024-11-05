import { ReactNode } from 'react';
import styles from './PopularProductsTop.module.scss';

interface PopularProductsTopProps {
  children: ReactNode;
  className?: string;
}

export function PopularProductsTop({ children, className }: Readonly<PopularProductsTopProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <div className={styles.PopularProductsTop + externalClass}>{children}</div>;
}
