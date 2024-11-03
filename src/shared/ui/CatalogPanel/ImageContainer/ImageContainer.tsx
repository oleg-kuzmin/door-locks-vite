import { ReactNode } from 'react';
import styles from './ImageContainer.module.scss';

interface ImageContainerProps {
  children: ReactNode;
  className?: string;
}

export function ImageContainer({ children, className }: Readonly<ImageContainerProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <div className={styles.ImageContainer + externalClass}>{children}</div>;
}
