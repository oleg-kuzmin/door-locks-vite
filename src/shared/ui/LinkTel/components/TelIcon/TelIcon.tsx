import styles from './TelIcon.module.scss';

interface TelIconProps {
  className?: string;
}

export function TelIcon({ className }: Readonly<TelIconProps>) {
  const externalClass = className ? ` ${className}` : '';

  return <span className={styles.TelIcon + externalClass}></span>;
}
