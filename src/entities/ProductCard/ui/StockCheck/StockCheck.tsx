import { CheckIcon } from './CheckIcon';
import { CheckText } from './CheckText';
import styles from './StockCheck.module.scss';

interface StockCheckProps {
  stock: boolean;
  className?: string;
}

export function StockCheck({ stock, className }: Readonly<StockCheckProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.StockCheck + externalClass}>
      <CheckIcon stock={stock} />
      <CheckText stock={stock} />
    </div>
  );
}
