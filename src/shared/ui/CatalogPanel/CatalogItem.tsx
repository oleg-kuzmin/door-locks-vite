import { CatalogLink } from './CatalogLink';
import { DecorateLine } from './DecorateLine';
import styles from './CatalogItem.module.scss';

interface CatalogItemProps {
  isActive: boolean;
  href: string;
  text: string;
  className?: string;
}

export function CatalogItem({ isActive, href, text, className }: Readonly<CatalogItemProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <li className={styles.CatalogItem + externalClass}>
      <CatalogLink href={href} isActive={isActive} text={text} />
      <DecorateLine isActive={isActive} />
    </li>
  );
}
