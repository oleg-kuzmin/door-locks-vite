import { ReactNode } from 'react';
import styles from './HeroUi.module.scss';

interface HeroUiProps {
  children: ReactNode;
  className?: string;
}

export function HeroUi({ children, className }: Readonly<HeroUiProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <div className={styles.HeroUi + externalClass}>{children}</div>;
}
