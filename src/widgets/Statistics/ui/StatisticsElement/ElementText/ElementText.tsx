import styles from './ElementText.module.scss';

interface ElementTextProps {
  text: string;
  className?: string;
}

export function ElementText({ text, className }: Readonly<ElementTextProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <span className={styles.ElementText + externalClass}>{text}</span>;
}
