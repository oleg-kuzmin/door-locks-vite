import { Image } from './Image';
import { InfoBlock } from './InfoBlock';
import { Present } from './Present';
import { Price } from './Price';
import { Sale } from './Sale';
import { StockCheck } from './StockCheck';
import { Title } from './Title';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  className?: string;
}

export function ProductCard({ className }: Readonly<ProductCardProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <article className={styles.ProductCard + externalClass}>
      <StockCheck className={styles.ProductCard__StockCheck} stock={true} />
      <Present className={styles.ProductCard__Present} />
      <Sale className={styles.ProductCard__Sale} />
      <Image className={styles.ProductCard__Image} src="/cards/default.png" alt="Default" />
      <InfoBlock>
        <Title className={styles.ProductCard__Title} text="Дверной Замок Golden Soft для отеля" />
        <Price className={styles.ProductCard__Price} newPrice="33 000" oldPrice="37 000" />
      </InfoBlock>
    </article>
  );
}
