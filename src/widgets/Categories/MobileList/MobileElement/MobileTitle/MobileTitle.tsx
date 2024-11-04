import styles from './MobileTitle.module.scss';

interface MobileTitleProps {
  text: string;
  className?: string;
}

export function MobileTitle({ text, className }: Readonly<MobileTitleProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <p className={styles.MobileTitle + externalClass}>{text}</p>;
}
