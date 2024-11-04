import { ReactNode } from 'react';
import styles from './ProductPrice.module.scss';

interface ProductPriceProps {
  children: ReactNode;
  className?: string;
}

export function ProductPrice({ children, className }: Readonly<ProductPriceProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <div className={styles.ProductPrice + externalClass}>{children}</div>;
}
