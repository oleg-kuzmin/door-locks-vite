import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { LinkCallForm } from '../LinkCallForm';
import { LinkTel } from '../LinkTel';
import { BurgerItem } from './BurgerItem';
import { BurgerLinks } from './BurgerLinks';
import { BurgerList } from './BurgerList';
import { BurgerNavigation } from './BurgerNavigation';
import { BurgerPanelContent } from './BurgerPanelContent';
import styles from './BurgerPanel.module.scss';

interface BurgerPanelProps {
  isActive: boolean;
  className?: string;
}

export function BurgerPanel({ isActive, className }: Readonly<BurgerPanelProps>) {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const externalClass = className ? ` ${className}` : '';
  const { animateBurgerPanel } = styles;
  const timeout = parseInt(animateBurgerPanel);

  return (
    <CSSTransition nodeRef={nodeRef} in={isActive} classNames={{ ...styles }} timeout={timeout} unmountOnExit>
      <div className={styles.BurgerPanel + externalClass} ref={nodeRef}>
        <BurgerPanelContent>
          <BurgerNavigation>
            <BurgerList>
              <BurgerItem href="#" text="Главная" />
              <BurgerItem href="#" text="Каталог" hasArrow />
              <BurgerItem href="#" text="Оптовая продажа" />
              <BurgerItem href="#" text="О нас" />
            </BurgerList>
          </BurgerNavigation>
          <BurgerLinks>
            <LinkTel />
            <LinkCallForm className={styles.BurgerPanel__LinkCallForm} />
          </BurgerLinks>
        </BurgerPanelContent>
      </div>
    </CSSTransition>
  );
}
