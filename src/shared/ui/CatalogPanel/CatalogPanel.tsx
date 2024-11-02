import { CatalogItem } from './CatalogItem';
import { CatalogList } from './CatalogList';
import styles from './CatalogPanel.module.scss';

interface CatalogPanelProps {
  className?: string;
}

export function CatalogPanel({ className }: Readonly<CatalogPanelProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.CatalogPanel + externalClass}>
      <nav>
        <CatalogList>
          <CatalogItem href="#" isActive={false} text="Накладные электронные замки" />
          <CatalogItem href="#" isActive={false} text="Врезные электронные замки" />
          <CatalogItem href="#" isActive={false} text="Замки для квартиры" />
          <CatalogItem href="#" isActive={false} text="Замки для дома" />
          <CatalogItem href="#" isActive={false} text="Замки для отелей" />
          <CatalogItem href="#" isActive={false} text="Замки для офиса" />
          <CatalogItem href="#" isActive={false} text="Замки для шкафчиков" />
          <CatalogItem href="#" isActive={false} text="Замки для раздевалок" />
        </CatalogList>
      </nav>
    </div>
  );
}
