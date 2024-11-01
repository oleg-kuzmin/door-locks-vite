import { NavigationArrow } from '../../components/NavigationArrow';
import { NavigationLink } from '../../components/NavigationLink';
import { NavigationItem } from '../NavigationItem';
import { NavigationList } from '../NavigationList';
import { useCatalogPanel } from 'shared/lib';
import styles from './Navigation.module.scss';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: Readonly<NavigationProps>) {
  const [isActiveCatalogPanel, openCatalogPanel, closeCatalogPanel] = useCatalogPanel();
  const externalClass = className ? ` ${className}` : '';

  return (
    <nav className={styles.Navigation + externalClass}>
      <NavigationList>
        <NavigationItem>
          <NavigationLink href="#" text="Главная" handleMouseEnter={closeCatalogPanel} />
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#" text="Каталог" handleMouseEnter={openCatalogPanel} />
          <NavigationArrow isActive={isActiveCatalogPanel} />
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#" text="Оптовая продажа" handleMouseEnter={closeCatalogPanel} />
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#" text="О нас" handleMouseEnter={closeCatalogPanel} />
        </NavigationItem>
      </NavigationList>
    </nav>
  );
}
