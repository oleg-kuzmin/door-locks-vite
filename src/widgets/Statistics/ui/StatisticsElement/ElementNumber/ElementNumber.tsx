import styles from './ElementNumber.module.scss';

interface ElementNumberProps {
  text: string;
  className?: string;
}

export function ElementNumber({ text, className }: Readonly<ElementNumberProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <span className={styles.ElementNumber + externalClass}>{text}</span>;
}
