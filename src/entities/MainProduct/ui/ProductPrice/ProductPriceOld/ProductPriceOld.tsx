import styles from './ProductPriceOld.module.scss';

interface ProductPriceOldProps {
  text: string;
  className?: string;
}

export function ProductPriceOld({ text, className }: Readonly<ProductPriceOldProps>) {
  const externalClass = className ? ` ${className}` : '';

  return <del className={styles.ProductPriceOld + externalClass}>{text}</del>;
}
