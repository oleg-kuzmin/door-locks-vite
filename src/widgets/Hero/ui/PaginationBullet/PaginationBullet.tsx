import styles from './PaginationBullet.module.scss';

interface PaginationBulletProps {
  index: number;
  indexActiveSlide: number;
  className?: string;
}

export function PaginationBullet({ indexActiveSlide, index, className }: Readonly<PaginationBulletProps>) {
  const externalClass = className ? ` ${className}` : '';
  const modifierClass = index === indexActiveSlide ? ` ${styles.PaginationBullet_Active}` : '';
  return <div className={styles.PaginationBullet + modifierClass + externalClass}></div>;
}
