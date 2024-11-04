import { DesktopElement } from './DesktopElement';
import styles from './DesktopList.module.scss';

interface DesktopListProps {
  className?: string;
}

export function DesktopList({ className }: Readonly<DesktopListProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <ul className={styles.DesktopList + externalClass}>
      <DesktopElement text="Для отелей" type="hotels" href="#" />
      <DesktopElement text="Для шкафчиков" type="lockers" href="#" />
      <DesktopElement text="Для офиса" type="office" href="#" />
      <DesktopElement text="Для дома" type="house" href="#" />
    </ul>
  );
}
