import { ReactNode } from 'react';
import styles from './HeroContent.module.scss';

interface HeroContentProps {
  children: ReactNode;
  className?: string;
}

export function HeroContent({ children, className }: Readonly<HeroContentProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <div className={styles.HeroContent + externalClass}>{children}</div>;
}
