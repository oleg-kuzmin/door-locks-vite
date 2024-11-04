import { ReactNode } from 'react';
import styles from './Links.module.scss';

interface LinksProps {
  children: ReactNode;
  className?: string;
}

export function Links({ children, className }: Readonly<LinksProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <div className={styles.Links + externalClass}>{children}</div>;
}
