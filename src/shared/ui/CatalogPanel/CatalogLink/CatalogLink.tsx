import styles from './CatalogLink.module.scss';

interface CatalogLinkProps {
  href: string;
  isActive: boolean;
  text: string;
  className?: string;
}

export function CatalogLink({ href, isActive, text, className }: Readonly<CatalogLinkProps>) {
  const externalClass = className ? ` ${className}` : '';
  const modiferClass = isActive ? ` ${styles.CatalogLink_Active}` : '';

  return (
    <a className={styles.CatalogLink + modiferClass + externalClass} href={href}>
      {text}
    </a>
  );
}
