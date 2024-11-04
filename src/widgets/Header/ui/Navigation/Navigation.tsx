import { NavigationArrow } from './NavigationArrow';
import { NavigationItem } from './NavigationItem';
import { NavigationLink } from './NavigationLink';
import { NavigationList } from './NavigationList';
import { useCatalogPanel } from 'shared/lib';
import { CatalogPanel } from 'shared/ui';
import styles from './Navigation.module.scss';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: Readonly<NavigationProps>) {
  const [isActiveCatalogPanel, openCatalogPanel, closeCatalogPanel] = useCatalogPanel();
  const externalClass = className ? ` ${className}` : '';

  return (
    <nav className={externalClass}>
      <NavigationList>
        <NavigationItem>
          <NavigationLink href="#" text="Главная" handleMouseEnter={closeCatalogPanel} />
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#" text="Каталог" handleMouseEnter={openCatalogPanel} />
          <NavigationArrow isActive={isActiveCatalogPanel} />
          <CatalogPanel className={styles.NavigationCatalogPanel} isActive={isActiveCatalogPanel} />
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
