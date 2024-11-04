import styles from './ButtonLinkSecondary.module.scss';

interface ButtonLinkSecondaryProps {
  href: string;
  text: string;
  className?: string;
}

export function ButtonLinkSecondary({ href, text, className }: Readonly<ButtonLinkSecondaryProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <a className={styles.ButtonLinkSecondary + externalClass} href={href}>
      {text}
    </a>
  );
}
