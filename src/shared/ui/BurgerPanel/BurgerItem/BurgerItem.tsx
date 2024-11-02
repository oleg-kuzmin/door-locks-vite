import { BurgerLink } from './BurgerLink';
import styles from './BurgerItem.module.scss';

interface BurgerItemProps {
  href: string;
  text: string;
  hasArrow?: boolean;
  className?: string;
}

export function BurgerItem({ href, text, hasArrow = false, className }: Readonly<BurgerItemProps>) {
  const externalClass = className ? ` ${className}` : '';
  const modifierClass = hasArrow ? ` ${styles.BurgerItem_Arrow}` : '';

  return (
    <li className={styles.BurgerItem + modifierClass + externalClass}>
      <BurgerLink href={href} text={text} />
    </li>
  );
}
