import { ItemIcon } from './ItemIcon';
import { ItemText } from './ItemText';
import styles from './AdvantagesItem.module.scss';

interface AdvantagesItemProps {
  type: 'box' | 'logo';
  text: string;
  className?: string;
}

export function AdvantagesItem({ type, text, className }: Readonly<AdvantagesItemProps>) {
  const externalClass = className ? ` ${className}` : '';
  return (
    <li className={styles.AdvantagesItem + externalClass}>
      <ItemIcon type={type} />
      <ItemText text={text} />
    </li>
  );
}
