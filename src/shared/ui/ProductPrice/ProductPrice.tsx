import { ProductPriceNew } from './ProductPriceNew';
import { ProductPriceOld } from './ProductPriceOld';
import styles from './ProductPrice.module.scss';

interface ProductPriceProps {
  type: 'desktop' | 'mobile';
  newPrice: string;
  oldPrice: string;
  className?: string;
}

export function ProductPrice({ type, newPrice, oldPrice, className }: Readonly<ProductPriceProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.ProductPrice + externalClass}>
      <ProductPriceNew text={newPrice} type={type} />
      <ProductPriceOld text={oldPrice} type={type} />
    </div>
  );
}
