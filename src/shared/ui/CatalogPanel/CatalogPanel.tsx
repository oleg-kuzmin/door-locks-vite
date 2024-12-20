import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ButtonLinkMain } from '../ButtonLinkMain';
import { CatalogImage } from './CatalogImage';
import { CatalogItem } from './CatalogItem';
import { CatalogList } from './CatalogList';
import { CatalogNavigation } from './CatalogNavigation';
import { ImageContainer } from './ImageContainer';
import { useCatalogItem } from 'shared/lib';
import styles from './CatalogPanel.module.scss';

interface CatalogPanelProps {
  isActive: boolean;
  className?: string;
}

export function CatalogPanel({ isActive, className }: Readonly<CatalogPanelProps>) {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const externalClass = className ? ` ${className}` : '';
  const { animateCatalogPanel } = styles;
  const timeout = parseInt(animateCatalogPanel);
  const [activeLink, isStartImageAnimation, handleCatalogItem] = useCatalogItem(isActive, timeout);

  return (
    <CSSTransition nodeRef={nodeRef} in={isActive} classNames={{ ...styles }} timeout={timeout} unmountOnExit>
      <div className={styles.CatalogPanel + externalClass} ref={nodeRef}>
        <div>
          <CatalogNavigation>
            <CatalogList>
              <CatalogItem
                activeLink={activeLink}
                href="#"
                text="Накладные электронные замки"
                handleCatalogItem={handleCatalogItem}
              />
              <CatalogItem
                activeLink={activeLink}
                href="#"
                text="Врезные электронные замки"
                handleCatalogItem={handleCatalogItem}
              />
              <CatalogItem
                activeLink={activeLink}
                href="#"
                text="Замки для квартиры"
                handleCatalogItem={handleCatalogItem}
              />
              <CatalogItem
                activeLink={activeLink}
                href="#"
                text="Замки для дома"
                handleCatalogItem={handleCatalogItem}
              />
              <CatalogItem
                activeLink={activeLink}
                href="#"
                text="Замки для отелей"
                handleCatalogItem={handleCatalogItem}
              />
              <CatalogItem
                activeLink={activeLink}
                href="#"
                text="Замки для офиса"
                handleCatalogItem={handleCatalogItem}
              />
              <CatalogItem
                activeLink={activeLink}
                href="#"
                text="Замки для шкафчиков"
                handleCatalogItem={handleCatalogItem}
              />
              <CatalogItem
                activeLink={activeLink}
                href="#"
                text="Замки для раздевалок"
                handleCatalogItem={handleCatalogItem}
              />
            </CatalogList>
          </CatalogNavigation>
          <ButtonLinkMain
            className={styles.CatalogPanel__ButtonLinkMain}
            href="#"
            text="Смотреть все"
            handleCatalogItem={handleCatalogItem}
          />
        </div>
        <ImageContainer>
          <CatalogImage activeLink={activeLink} isStartImageAnimation={isStartImageAnimation} />
        </ImageContainer>
      </div>
    </CSSTransition>
  );
}
