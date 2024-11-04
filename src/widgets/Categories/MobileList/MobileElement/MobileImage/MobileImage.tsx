import styles from './MobileImage.module.scss';

interface MobileImageProps {
  type: 'hotels' | 'lockers' | 'house' | 'office';
  className?: string;
}

export function MobileImage({ type, className }: Readonly<MobileImageProps>) {
  const externalClass = className ? ` ${className}` : '';
  let modifierClass: string;

  switch (type) {
    case 'hotels':
      modifierClass = ` ${styles.MobileImage_Type_Hotels}`;
      break;
    case 'lockers':
      modifierClass = ` ${styles.MobileImage_Type_Lockers}`;
      break;
    case 'house':
      modifierClass = ` ${styles.MobileImage_Type_House}`;
      break;
    case 'office':
      modifierClass = ` ${styles.MobileImage_Type_Office}`;
      break;
    default:
      modifierClass = '';
      break;
  }

  return <div className={styles.MobileImage + modifierClass + externalClass}></div>;
}
