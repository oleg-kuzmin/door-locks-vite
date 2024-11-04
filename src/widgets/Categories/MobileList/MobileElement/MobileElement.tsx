import { MobileImage } from './MobileImage';
import { MobileTitle } from './MobileTitle';
import styles from './MobileElement.module.scss';

interface MobileElementProps {
  type: 'hotels' | 'lockers' | 'house' | 'office';
  text: string;
  href: string;
  className?: string;
}

export function MobileElement({ href, type, text, className }: Readonly<MobileElementProps>) {
  const externalClass = className ? ` ${className}` : '';
  return (
    <li className={styles.MobileElement + externalClass}>
      <a href={href} className={styles.MobileElement__Link} tabIndex={0}>
        <MobileImage type={type} />
        <MobileTitle text={text} />
      </a>
    </li>
  );
}
