import styles from './PriceNew.module.scss';

interface PriceNewProps {
  text: string;
  className?: string;
}

export function PriceNew({ text, className }: Readonly<PriceNewProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <ins className={styles.PriceNew + externalClass}>{text}</ins>;
}
