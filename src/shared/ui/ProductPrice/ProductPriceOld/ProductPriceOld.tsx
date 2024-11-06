import styles from './ProductPriceOld.module.scss';

interface ProductPriceOldProps {
  type: 'desktop' | 'mobile';
  text: string;
  className?: string;
}

export function ProductPriceOld({ type, text, className }: Readonly<ProductPriceOldProps>) {
  const externalClass = className ? ` ${className}` : '';
  let modifierClass = '';

  switch (type) {
    case 'desktop':
      modifierClass = ` ${styles.ProductPriceOld_Type_Desktop}`;
      break;
    case 'mobile':
      modifierClass = ` ${styles.ProductPriceOld_Type_Mobile}`;
      break;
  }

  return <del className={styles.ProductPriceOld + modifierClass + externalClass}>{text}</del>;
}
