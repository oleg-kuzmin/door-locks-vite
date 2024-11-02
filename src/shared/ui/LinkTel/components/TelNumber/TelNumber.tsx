import styles from './TelNumber.module.scss';

interface TelNumberProps {
  className?: string;
}

export function TelNumber({ className }: Readonly<TelNumberProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <div className={styles.TelNumber + externalClass}>+7 (966) 55 88 499</div>;
}
