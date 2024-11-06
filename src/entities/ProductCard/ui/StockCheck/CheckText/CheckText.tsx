import styles from './CheckText.module.scss';

interface CheckTextProps {
  stock: boolean;
  className?: string;
}

export function CheckText({ stock, className }: Readonly<CheckTextProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <span className={styles.CheckText + externalClass}>{stock ? 'В наличии' : 'Нет в наличии'}</span>;
}
