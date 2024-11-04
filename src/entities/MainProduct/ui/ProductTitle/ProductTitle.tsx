import styles from './ProductTitle.module.scss';

interface ProductTitleProps {
  text: string;
  className?: string;
}

export function ProductTitle({ text, className }: Readonly<ProductTitleProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <h2 className={styles.ProductTitle + externalClass}>
      <span>Golden Soft</span>
      <br />
      <span>{text}</span>
    </h2>
  );
}
