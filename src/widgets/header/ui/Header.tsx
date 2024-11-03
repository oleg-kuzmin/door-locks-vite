import { Banner } from './Banner';
import { ButtonBurgerPanel } from './ButtonBurgerPanel';
import { HeaderContent } from './HeaderContent';
import { HiddenHeading } from './HiddenHeading';
import { LinkIcon } from './LinkIcon';
import { Links } from './Links';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { useBurgerPanel } from 'shared/lib';
import { BurgerPanel, CatalogPanel, LinkTel } from 'shared/ui';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: Readonly<HeaderProps>) {
  const [isActiveBurgerPanel, toggleBurgerPanel] = useBurgerPanel();
  const externalClass = className ? ` ${className}` : '';

  return (
    <header className={styles.Header + externalClass}>
      <HiddenHeading />
      <Banner />
      <HeaderContent>
        <ButtonBurgerPanel
          className={styles.Header__ButtonBurgerPanel}
          isActive={isActiveBurgerPanel}
          onClick={toggleBurgerPanel}
        />
        <Logo className={styles.Header__Logo} />
        <Navigation className={styles.Header__Navigation} />
        <LinkTel className={styles.Header__LinkTel} />
        <Links>
          <LinkIcon counter={8} href="#" type="like" />
          <LinkIcon counter={10} href="#" type="cart" />
        </Links>
      </HeaderContent>
      <BurgerPanel className={styles.Header__BurgerPanel} isActive={isActiveBurgerPanel} />
      <CatalogPanel isActive={true} />
    </header>
  );
}
