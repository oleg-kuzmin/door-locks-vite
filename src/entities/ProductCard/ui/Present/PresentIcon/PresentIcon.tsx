import styles from './PresentIcon.module.scss';

interface PresentIconProps {
  className?: string;
}

export function PresentIcon({ className }: Readonly<PresentIconProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <div className={styles.PresentIcon + externalClass}></div>;
}
