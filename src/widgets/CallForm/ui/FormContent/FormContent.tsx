import { ReactNode } from 'react';
import styles from './FormContent.module.scss';

interface FormContentProps {
  children: ReactNode;
  className?: string;
}

export function FormContent({ children, className }: Readonly<FormContentProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <div className={styles.FormContent + externalClass}>{children}</div>;
}
