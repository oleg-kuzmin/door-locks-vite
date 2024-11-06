import { ReactNode } from 'react';
import styles from './InfoBlock.module.scss';

interface InfoBlockProps {
  children: ReactNode;
  className?: string;
}

export function InfoBlock({ children, className }: Readonly<InfoBlockProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <div className={styles.InfoBlock + externalClass}>{children}</div>;
}
