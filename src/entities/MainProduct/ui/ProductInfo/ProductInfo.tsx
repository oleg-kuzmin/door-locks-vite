import { ReactNode } from 'react';
import styles from './ProductInfo.module.scss';

interface ProductInfoProps {
  children: ReactNode;
  className?: string;
}

export function ProductInfo({ children, className }: Readonly<ProductInfoProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <div className={styles.ProductInfo + externalClass}>{children}</div>;
}
