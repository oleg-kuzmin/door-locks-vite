import styles from './ProductPriceTitle.module.scss';

interface ProductPriceTitleProps {
  className?: string;
}

export function ProductPriceTitle({ className }: Readonly<ProductPriceTitleProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <p className={styles.ProductPriceTitle + externalClass}>Цена</p>;
}
