import styles from './FormSubtitle.module.scss';

interface FormSubtitleProps {
  text: string;
  className?: string;
}

export function FormSubtitle({ text, className }: Readonly<FormSubtitleProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <p className={styles.FormSubtitle + externalClass}>{text}</p>;
}
