import { CatalogLink } from './CatalogLink';
import { DecorateLine } from './DecorateLine';
import { HandleCatalogItem } from 'shared/lib';
import styles from './CatalogItem.module.scss';

interface CatalogItemProps {
  activeLink: string;
  href: string;
  text: string;
  handleCatalogItem: HandleCatalogItem;
  className?: string;
}

export function CatalogItem({ activeLink, href, text, handleCatalogItem, className }: Readonly<CatalogItemProps>) {
  const externalClass = className ? ` ${className}` : '';
  const isActive = activeLink === text;

  const handleLink = () => {
    handleCatalogItem(text);
  };

  return (
    <li className={styles.CatalogItem + externalClass}>
      <CatalogLink href={href} isActive={isActive} text={text} handleLink={handleLink} />
      <DecorateLine isActive={isActive} />
    </li>
  );
}
