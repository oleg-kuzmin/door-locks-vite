import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  text: string;
  className?: string;
}

export function SectionTitle({ text, className }: Readonly<SectionTitleProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <h2 className={styles.SectionTitle + externalClass}>{text}</h2>;
}
