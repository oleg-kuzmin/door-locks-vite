import styles from './DesktopImage.module.scss';

interface DesktopImageProps {
  type: 'hotels' | 'lockers' | 'house' | 'office';
  className?: string;
}

export function DesktopImage({ type, className }: Readonly<DesktopImageProps>) {
  const externalClass = className ? ` ${className}` : '';
  let modifierClass: string;

  switch (type) {
    case 'hotels':
      modifierClass = ` ${styles.DesktopImage_Type_Hotels}`;
      break;
    case 'lockers':
      modifierClass = ` ${styles.DesktopImage_Type_Lockers}`;
      break;
    case 'house':
      modifierClass = ` ${styles.DesktopImage_Type_House}`;
      break;
    case 'office':
      modifierClass = ` ${styles.DesktopImage_Type_Office}`;
      break;
    default:
      modifierClass = '';
      break;
  }

  return <div className={styles.DesktopImage + modifierClass + externalClass}></div>;
}
