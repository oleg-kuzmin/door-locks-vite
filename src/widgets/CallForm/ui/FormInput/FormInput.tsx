import styles from './FormInput.module.scss';

interface FormInputProps {
  type: 'text' | 'email';
  name: string;
  placeholder: string;
  className?: string;
}

export function FormInput({ type, name, placeholder, className }: Readonly<FormInputProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <input className={styles.FormInput + externalClass} type={type} name={name} placeholder={placeholder}></input>;
}
