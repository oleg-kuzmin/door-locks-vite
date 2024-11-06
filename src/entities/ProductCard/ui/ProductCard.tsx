import { Image } from './Image';
import { InfoBlock } from './InfoBlock';
import { Present } from './Present';
import { Sale } from './Sale';
import { StockCheck } from './StockCheck';
import { Title } from './Title';
import { ProductPrice } from 'shared/ui';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  className?: string;
}

export function ProductCard({ className }: Readonly<ProductCardProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <article className={styles.ProductCard + externalClass}>
      {/* <StockCheck stock={false} /> */}
      {/* <Present /> */}
      {/* <Sale /> */}
      <Image src="/cards/default.png" alt="Default" />
      <InfoBlock>
        <Title text="Дверной Замок Golden Soft для отеля" />
      </InfoBlock>
    </article>
  );
}
