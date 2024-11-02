import { Counter } from '../Counter';
import styles from './LinkIcon.module.scss';

interface LinkIconProps {
  counter: number;
  href: string;
  type: 'like' | 'cart';
  className?: string;
}

export function LinkIcon({ counter, href, type, className }: Readonly<LinkIconProps>) {
  const externalClass = className ? ` ${className}` : '';
  let modifierClass: string;

  switch (type) {
    case 'cart': {
      modifierClass = ` ${styles.LinkIcon_Type_Cart}`;
      break;
    }
    case 'like': {
      modifierClass = ` ${styles.LinkIcon_Type_Like}`;
      break;
    }
  }

  return (
    <a className={styles.LinkIcon + modifierClass + externalClass} href={href}>
      <Counter className={styles.LinkIcon__Counter} text={counter} />
    </a>
  );
}
