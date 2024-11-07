import { ReactNode } from 'react';
import styles from './FormUi.module.scss';

interface FormUiProps {
  children: ReactNode;
  className?: string;
}

export function FormUi({ children, className }: Readonly<FormUiProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <div className={styles.FormUi + externalClass}>{children}</div>;
}
