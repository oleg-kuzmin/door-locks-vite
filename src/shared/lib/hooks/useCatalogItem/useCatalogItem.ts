import { useEffect, useState } from 'react';
import { HandleCatalogItem } from 'shared/lib';

export function useCatalogItem(
  isActiveCatalogPanel: boolean,
  timeoutCSSTransition: number,
): [string, boolean, HandleCatalogItem] {
  const [activeLink, setActiveLink] = useState('Накладные электронные замки');
  const [isStartImageAnimation, setIsStartImageAnimation] = useState(false);

  const handleCatalogItem: HandleCatalogItem = title => {
    setIsStartImageAnimation(false);
    setActiveLink(title);
  };

  useEffect(() => {
    setIsStartImageAnimation(true);
  }, [activeLink]);

  useEffect(() => {
    setTimeout(() => {
      if (!isActiveCatalogPanel) {
        setActiveLink('Накладные электронные замки');
      }
    }, timeoutCSSTransition);
  }, [isActiveCatalogPanel, timeoutCSSTransition]);

  return [activeLink, isStartImageAnimation, handleCatalogItem];
}
