import styles from './HiddenHeading.module.scss';

interface HiddenHeadingProps {
  className?: string;
}

export function HiddenHeading({ className }: Readonly<HiddenHeadingProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <h1 className={styles.HiddenHeading + externalClass}>Golden Soft</h1>;
}
