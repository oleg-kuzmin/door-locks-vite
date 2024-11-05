import styles from './DesktopButton.module.scss';

interface DesktopButtonProps {
  isDisabled: boolean;
  type: 'prev' | 'next';
  onClick: VoidFunction;
  className?: string;
}

export function DesktopButton({ isDisabled, type, onClick, className }: Readonly<DesktopButtonProps>) {
  const externalClass = className ? ` ${className}` : '';
  let modifierClass: string;

  switch (type) {
    case 'prev':
      modifierClass = ` ${styles.DesktopButton_Type_Prev}`;
      break;
    case 'next':
      modifierClass = ` ${styles.DesktopButton_Type_Next}`;
      break;
    default:
      modifierClass = '';
      break;
  }

  return (
    <button
      className={styles.DesktopButton + modifierClass + externalClass}
      disabled={isDisabled}
      onClick={onClick}></button>
  );
}
