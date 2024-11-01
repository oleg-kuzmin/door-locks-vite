import styles from './Logo.module.scss';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: Readonly<LogoProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <img className={styles.Logo + externalClass} src="/icons/logo.svg" alt="Логотип Golden Soft" />;
}
