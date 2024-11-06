import styles from './Title.module.scss';

interface TitleProps {
  text: string;
  className?: string;
}

export function Title({ text, className }: Readonly<TitleProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <h3 className={styles.Title + externalClass}>{text}</h3>;
}
