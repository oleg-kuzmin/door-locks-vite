import { PriceNew } from './PriceNew';
import { PriceOld } from './PriceOld';
import styles from './Price.module.scss';

interface PriceProps {
  newPrice: string;
  oldPrice: string;
  className?: string;
}

export function Price({ newPrice, oldPrice, className }: Readonly<PriceProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.Price + externalClass}>
      <PriceNew text={newPrice} />
      <PriceOld text={oldPrice} />
    </div>
  );
}
