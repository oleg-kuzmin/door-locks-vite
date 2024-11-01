import styles from './ButtonBurgerPanel.module.scss';

interface ButtonBurgerPanelProps {
  isActive: boolean;
  onClick: VoidFunction;
  className?: string;
}

export function ButtonBurgerPanel({ isActive, onClick, className }: Readonly<ButtonBurgerPanelProps>) {
  const modifierClass = isActive ? ` ${styles.ButtonBurgerPanel_Active}` : '';
  const externalClass = className ? ` ${className}` : '';
  return <button className={styles.ButtonBurgerPanel + modifierClass + externalClass} onClick={onClick}></button>;
}
