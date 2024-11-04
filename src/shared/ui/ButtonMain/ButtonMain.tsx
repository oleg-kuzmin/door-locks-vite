import styles from './ButtonMain.module.scss';

interface ButtonMainProps {
  text: string;
  onClick: VoidFunction;
  className?: string;
}

export function ButtonMain({ text, onClick, className }: Readonly<ButtonMainProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <button className={styles.ButtonMain + externalClass} onClick={onClick}>
      {text}
    </button>
  );
}
