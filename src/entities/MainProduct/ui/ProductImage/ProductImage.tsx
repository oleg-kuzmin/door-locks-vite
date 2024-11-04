import styles from './ProductImage.module.scss';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProductImage({ src, alt, className }: Readonly<ProductImageProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <img className={styles.ProductImage + externalClass} src={src} alt={alt} />;
}
