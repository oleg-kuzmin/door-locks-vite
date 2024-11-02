import { HandleCatalogItem } from 'shared/lib';
import styles from './ButtonLinkMain.module.scss';

interface ButtonLinkMainProps {
  href: string;
  text: string;
  handleCatalogItem?: HandleCatalogItem;
  className?: string;
}

export function ButtonLinkMain({ href, text, handleCatalogItem, className }: Readonly<ButtonLinkMainProps>) {
  const externalClass = className ? ` ${className}` : '';

  const handleLink = () => {
    if (handleCatalogItem) {
      handleCatalogItem('');
    }
  };

  return (
    <a className={styles.ButtonLinkMain + externalClass} href={href} onMouseEnter={handleLink} onFocus={handleLink}>
      {text}
    </a>
  );
}
