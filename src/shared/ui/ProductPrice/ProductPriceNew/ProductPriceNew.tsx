import styles from './ProductPriceNew.module.scss';

interface ProductPriceNewProps {
  type: 'desktop' | 'mobile';
  text: string;
  className?: string;
}

export function ProductPriceNew({ type, text, className }: Readonly<ProductPriceNewProps>) {
  const externalClass = className ? ` ${className}` : '';
  let modifierClass = '';

  switch (type) {
    case 'desktop':
      modifierClass = ` ${styles.ProductPriceNew_Type_Desktop}`;
      break;
    case 'mobile':
      modifierClass = ` ${styles.ProductPriceNew_Type_Mobile}`;
      break;
  }

  return <ins className={styles.ProductPriceNew + modifierClass + externalClass}>{text}</ins>;
}
