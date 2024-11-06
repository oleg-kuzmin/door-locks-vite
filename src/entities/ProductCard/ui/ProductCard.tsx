import { Present } from './Present';
import { Sale } from './Sale';
import { StockCheck } from './StockCheck';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  className?: string;
}

export function ProductCard({ className }: Readonly<ProductCardProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <article className={styles.ProductCard + externalClass}>
      <p>Card</p>
      {/* <StockCheck stock={false} /> */}
      {/* <Present /> */}
      <Sale />
    </article>
  );
}
