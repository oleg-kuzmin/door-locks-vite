import styles from './BurgerLink.module.scss';

interface BurgerLinkProps {
  href: string;
  text: string;
  className?: string;
}

export function BurgerLink({ href, text, className }: Readonly<BurgerLinkProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <a className={styles.BurgerLink + externalClass} href={href}>
      {text}
    </a>
  );
}
