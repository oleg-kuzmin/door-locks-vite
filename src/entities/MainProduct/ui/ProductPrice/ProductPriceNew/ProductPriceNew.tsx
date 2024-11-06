import styles from './ProductPriceNew.module.scss';

interface ProductPriceNewProps {
  text: string;
  className?: string;
}

export function ProductPriceNew({ text, className }: Readonly<ProductPriceNewProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <ins className={styles.ProductPriceNew + externalClass}>{text}</ins>;
}
