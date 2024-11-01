import styles from './LinkCallForm.module.scss';

interface LinkCallFormProps {
  className?: string;
}

export function LinkCallForm({ className }: Readonly<LinkCallFormProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <a href="#callForm" className={styles.LinkCallForm + externalClass}>
      Обратный звонок
    </a>
  );
}
