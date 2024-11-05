import styles from './ProductCard.module.scss';

interface ProductCardProps {
  text: string;
  className?: string;
}

export function ProductCard({ text, className }: Readonly<ProductCardProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <article className={styles.ProductCard + externalClass}>{text}</article>;
}
