import { useState } from 'react';

export function useBurgerPanel(): [boolean, () => void] {
  const [isActiveBurgerPanel, setIsActiveBurgerPanel] = useState(false);

  const closeBurgerPanel = () => {
    setIsActiveBurgerPanel(false);
  };

  const toggleBurgerPanel = () => {
    setIsActiveBurgerPanel(!isActiveBurgerPanel);

    if (!isActiveBurgerPanel) {
      document?.addEventListener('scroll', closeBurgerPanel);
    } else {
      document?.removeEventListener('scroll', closeBurgerPanel);
    }
  };

  return [isActiveBurgerPanel, toggleBurgerPanel];
}
