import { ProductPriceNew } from './ProductPriceNew';
import { ProductPriceOld } from './ProductPriceOld';
import styles from './ProductPrice.module.scss';

interface ProductPriceProps {
  newPrice: string;
  oldPrice: string;
  className?: string;
}

export function ProductPrice({ newPrice, oldPrice, className }: Readonly<ProductPriceProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.ProductPrice + externalClass}>
      <ProductPriceNew text={newPrice} />
      <ProductPriceOld text={oldPrice} />
    </div>
  );
}
