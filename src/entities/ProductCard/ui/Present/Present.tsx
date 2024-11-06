import { PresentIcon } from './PresentIcon';
import { PresentText } from './PresentText';
import styles from './Present.module.scss';

interface PresentProps {
  className?: string;
}

export function Present({ className }: Readonly<PresentProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.Present + externalClass}>
      <PresentIcon />
      <PresentText />
    </div>
  );
}
