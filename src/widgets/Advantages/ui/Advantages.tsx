import { AdvantagesItem } from './AdvantagesItem';
import { AdvantagesList } from './AdvantagesList';
import { SectionTitle } from 'shared/ui';
import styles from './Advantages.module.scss';

interface AdvantagesProps {
  className?: string;
}

export function Advantages({ className }: Readonly<AdvantagesProps>) {
  const externalClass = className ? ` ${className}` : '';
  return (
    <section className={styles.Advantages + externalClass}>
      <SectionTitle className={styles.Advantages__Title} text="Почему GoldenService?" />
      <AdvantagesList>
        <AdvantagesItem text="Возврат удвоенной стоимости каждого замка в случае брака." type="box" />
        <AdvantagesItem text="Наносим ваш логотип компании на наш продукт" type="logo" />
        <AdvantagesItem text="Возврат удвоенной стоимости каждого замка в случае брака." type="box" />
      </AdvantagesList>
    </section>
  );
}
