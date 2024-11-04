import { DesktopImage } from './DesktopImage';
import { DesktopTitle } from './DesktopTitle';
import { ButtonLinkSecondary } from 'shared/ui';
import styles from './DesktopElement.module.scss';

interface DesktopElementProps {
  text: string;
  href: string;
  type: 'hotels' | 'lockers' | 'house' | 'office';
  className?: string;
}

export function DesktopElement({ text, type, href, className }: Readonly<DesktopElementProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <li className={styles.DesktopElement + externalClass}>
      <div className={styles.DesktopElement__Info}>
        <DesktopTitle className={styles.DesktopElement__Title} text={text} />
        <ButtonLinkSecondary href={href} text="Перейти" />
      </div>
      <DesktopImage type={type} />
    </li>
  );
}
