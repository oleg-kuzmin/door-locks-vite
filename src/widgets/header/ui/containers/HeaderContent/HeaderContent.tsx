import { ReactNode } from 'react';
import styles from './HeaderContent.module.scss';

interface HeaderContentProps {
  children: ReactNode;
  className?: string;
}

export function HeaderContent({ children, className }: Readonly<HeaderContentProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <div className={styles.HeaderContent + externalClass}>{children}</div>;
}
