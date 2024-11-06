import styles from './Sale.module.scss';

interface SaleProps {
  className?: string;
}

export function Sale({ className }: Readonly<SaleProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <div className={styles.Sale + externalClass}>SALE</div>;
}
