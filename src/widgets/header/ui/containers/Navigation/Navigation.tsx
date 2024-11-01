import { NavigationArrow } from '../../components/NavigationArrow';
import { NavigationLink } from '../../components/NavigationLink';
import { NavigationItem } from '../NavigationItem';
import { NavigationList } from '../NavigationList';
import styles from './Navigation.module.scss';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: Readonly<NavigationProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <nav className={styles.Navigation + externalClass}>
      <NavigationList>
        <NavigationItem>
          <NavigationLink href="#" text="Главная" handleMouseEnter={() => console.log('Click')} />
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#" text="Каталог" handleMouseEnter={() => console.log('Click')} />
          <NavigationArrow isActive={false} />
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#" text="Оптовая продажа" handleMouseEnter={() => console.log('Click')} />
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#" text="О нас" handleMouseEnter={() => console.log('Click')} />
        </NavigationItem>
      </NavigationList>
    </nav>
  );
}
