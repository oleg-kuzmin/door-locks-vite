import styles from './DesktopTitle.module.scss';

interface DesktopTitleProps {
  text: string;
  className?: string;
}

export function DesktopTitle({ text, className }: Readonly<DesktopTitleProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <p className={styles.DesktopTitle + externalClass}>{text}</p>;
}
