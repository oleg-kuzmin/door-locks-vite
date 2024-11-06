import styles from './PresentText.module.scss';

interface PresentTextProps {
  className?: string;
}

export function PresentText({ className }: Readonly<PresentTextProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <span className={styles.PresentText + externalClass}>Подарок</span>;
}
