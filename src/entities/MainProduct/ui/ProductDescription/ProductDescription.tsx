import styles from './ProductDescription.module.scss';

interface ProductDescriptionProps {
  text: string;
  className?: string;
}

export function ProductDescription({ text, className }: Readonly<ProductDescriptionProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <p className={styles.ProductDescription + externalClass}>{text}</p>;
}
