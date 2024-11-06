import { ProductDescription } from './ProductDescription';
import { ProductImage } from './ProductImage';
import { ProductInfo } from './ProductInfo';
import { ProductPriceTitle } from './ProductPriceTitle';
import { ProductTitle } from './ProductTitle';
import { addWhiteSpacesPrice, useMediaDesktop } from 'shared/lib';
import { ButtonMain, ProductPrice } from 'shared/ui';
import styles from './MainProduct.module.scss';

interface MainProductProps {
  className?: string;
}

export function MainProduct({ className }: Readonly<MainProductProps>) {
  const externalClass = className ? ` ${className}` : '';
  const mediaDesktop = useMediaDesktop();
  const newPrice = addWhiteSpacesPrice('33000');
  const oldPrice = addWhiteSpacesPrice('37000');

  const productPrice = mediaDesktop ? (
    <ProductPrice type="desktop" newPrice={newPrice} oldPrice={oldPrice} />
  ) : (
    <ProductPrice type="mobile" newPrice={newPrice} oldPrice={oldPrice} />
  );

  return (
    <article className={styles.MainProduct + externalClass}>
      <ProductImage className={styles.MainProduct__Image} src="/categories/default.png" alt="GS-200Z-5 для офиса" />
      <ProductInfo>
        <ProductTitle className={styles.MainProduct__Title} text="GS-200Z-5 для офиса" />
        <ProductDescription
          className={styles.MainProduct__Description}
          text="Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы. "
        />
        <ProductPriceTitle className={styles.MainProduct__PriceTitle} />
        {productPrice}
        <ButtonMain className={styles.MainProduct__ButtonMain} text="Добавить в корзину" onClick={() => {}} />
      </ProductInfo>
    </article>
  );
}
