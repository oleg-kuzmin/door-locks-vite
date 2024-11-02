import { TelIcon } from './TelIcon';
import { TelNumber } from './TelNumber';
import styles from './LinkTel.module.scss';

interface LinkTelProps {
  className?: string;
}

export function LinkTel({ className }: Readonly<LinkTelProps>) {
  const externalClass = className ? ` ${className}` : '';
  return (
    <a className={styles.LinkTel + externalClass} href="tel:+79665588499">
      <TelIcon />
      <TelNumber />
    </a>
  );
}
