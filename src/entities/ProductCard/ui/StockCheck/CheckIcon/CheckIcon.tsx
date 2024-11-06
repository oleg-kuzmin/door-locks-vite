import styles from './CheckIcon.module.scss';

interface CheckIconProps {
  stock: boolean;
  className?: string;
}

export function CheckIcon({ stock, className }: Readonly<CheckIconProps>) {
  const externalClass = className ? ` ${className}` : '';
  const modifierClass = stock ? ` ${styles.CheckIcon_Stock_True}` : ` ${styles.CheckIcon_Stock_False}`;
  
  return <div className={styles.CheckIcon + modifierClass + externalClass}></div>;
}
