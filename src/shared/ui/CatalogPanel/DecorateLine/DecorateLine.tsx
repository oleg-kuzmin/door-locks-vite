import styles from './DecorateLine.module.scss';

interface DecorateLineProps {
  isActive: boolean;
  className?: string;
}

export function DecorateLine({ isActive, className }: Readonly<DecorateLineProps>) {
  const externalClass = className ? ` ${className}` : '';
  const modiferClass = isActive ? ` ${styles.DecorateLine_Active}` : '';
  return <div className={styles.DecorateLine + modiferClass + externalClass}></div>;
}
