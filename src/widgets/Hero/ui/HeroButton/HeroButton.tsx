import styles from './HeroButton.module.scss';

interface HeroButtonProps {
  type: 'next' | 'prev';
  onClick: VoidFunction;
  className?: string;
}

export function HeroButton({ type, onClick, className }: Readonly<HeroButtonProps>) {
  const externalClass = className ? ` ${className}` : '';
  let modifierClass: string;

  switch (type) {
    case 'next': {
      modifierClass = ` ${styles.HeroButton_Type_Next}`;
      break;
    }
    case 'prev': {
      modifierClass = ` ${styles.HeroButton_Type_Prev}`;
      break;
    }
  }

  return <button className={styles.HeroButton + modifierClass + externalClass} onClick={onClick}></button>;
}
