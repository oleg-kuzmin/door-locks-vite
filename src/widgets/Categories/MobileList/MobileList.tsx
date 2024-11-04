import { MobileElement } from './MobileElement';
import styles from './MobileList.module.scss';

interface MobileListProps {
  className?: string;
}

export function MobileList({ className }: Readonly<MobileListProps>) {
  const externalClass = className ? ` ${className}` : '';
  return (
    <ul className={styles.MobileList + externalClass}>
      <MobileElement text="Для отелей" type="hotels" href="#" />
      <MobileElement text="Для шкафчиков" type="lockers" href="#" />
      <MobileElement text="Для офиса" type="office" href="#" />
      <MobileElement text="Для дома" type="house" href="#" />
    </ul>
  );
}
