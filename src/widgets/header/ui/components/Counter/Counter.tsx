import styles from './Counter.module.scss';

interface CounterProps {
  text: number;
  className?: string;
}

export function Counter({ text, className }: Readonly<CounterProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <span className={styles.Counter + externalClass}>{text}</span>;
}
