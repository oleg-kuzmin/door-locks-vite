import styles from './NavigationArrow.module.scss';

interface NavigationArrowProps {
  isActive: boolean;
  className?: string;
}

export function NavigationArrow({ isActive, className }: Readonly<NavigationArrowProps>) {
  const externalClass = className ? ` ${className}` : '';
  const modifierClass = isActive ? ` ${styles.NavigationArrow_Active}` : '';
  return <div className={styles.NavigationArrow + modifierClass + externalClass}></div>;
}
