import styles from './ItemIcon.module.scss';

interface ItemIconProps {
  type: 'box' | 'logo';
  className?: string;
}

export function ItemIcon({ type, className }: Readonly<ItemIconProps>) {
  const externalClass = className ? ` ${className}` : '';
  let modifierClass: string;

  switch (type) {
    case 'box':
      modifierClass = ` ${styles.ItemIcon_Type_Box}`;
      break;
    case 'logo':
      modifierClass = ` ${styles.ItemIcon_Type_Logo}`;
      break;
    default:
      modifierClass = '';
      break;
  }

  return <div className={styles.ItemIcon + modifierClass + externalClass}></div>;
}
