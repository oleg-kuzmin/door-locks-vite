import { ReactNode } from 'react';
import styles from './HeroPagination.module.scss';

interface HeroPaginationProps {
  children: ReactNode;
  className?: string;
}

export function HeroPagination({ children, className }: Readonly<HeroPaginationProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <div className={styles.HeroPagination + externalClass}>{children}</div>;
}
