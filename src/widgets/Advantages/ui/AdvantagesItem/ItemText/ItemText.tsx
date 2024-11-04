import styles from './ItemText.module.scss';

interface ItemTextProps {
  text: string;
  className?: string;
}

export function ItemText({ text, className }: Readonly<ItemTextProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <p className={styles.ItemText + externalClass}>{text}</p>;
}
