import { useState } from 'react';

export function useCatalogPanel(): [boolean, VoidFunction, VoidFunction] {
  const [isActiveCatalogPanel, setIsActiveCatalogPanel] = useState(false);

  const openCatalogPanel = () => {
    setIsActiveCatalogPanel(true);
    document?.addEventListener('scroll', handleMouseScrollDocument);
    document?.addEventListener('mouseover', handleMouseOverOutCatalog);
  };

  const closeCatalogPanel = () => {
    setIsActiveCatalogPanel(false);
    document?.removeEventListener('scroll', handleMouseScrollDocument);
    document?.removeEventListener('mouseover', handleMouseOverOutCatalog);
  };

  const handleMouseScrollDocument = () => {
    closeCatalogPanel();
  };

  const handleMouseOverOutCatalog = (evt: MouseEvent) => {
    let isHeader: HTMLElement | null | undefined = null;
    if (evt.target instanceof HTMLElement) {
      isHeader = evt.target.closest('header');
    }
    if (!isHeader) {
      closeCatalogPanel();
    }
  };

  return [isActiveCatalogPanel, openCatalogPanel, closeCatalogPanel];
}
