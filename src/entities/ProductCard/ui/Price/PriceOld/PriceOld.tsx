import styles from './PriceOld.module.scss';

interface PriceOldProps {
  text: string;
  className?: string;
}

export function PriceOld({ text, className }: Readonly<PriceOldProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <del className={styles.PriceOld + externalClass}>{text}</del>;
}
