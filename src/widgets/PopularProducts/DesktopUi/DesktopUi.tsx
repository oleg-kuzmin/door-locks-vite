import { ReactNode } from 'react';
import styles from './DesktopUi.module.scss';

interface DesktopUiProps {
  children: ReactNode;
  className?: string;
}

export function DesktopUi({ children, className }: Readonly<DesktopUiProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <div className={styles.DesktopUi + externalClass}>{children}</div>;
}
