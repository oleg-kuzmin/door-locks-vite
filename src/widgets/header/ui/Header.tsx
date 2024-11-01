import { ButtonBurgerPanel } from './components/ButtonBurgerPanel';
import { HiddenHeading } from './components/HiddenHeading';
import { LinkIcon } from './components/LinkIcon';
import { Logo } from './components/Logo';
import { Banner } from './containers/Banner';
import { HeaderContent } from './containers/HeaderContent';
import { Links } from './containers/Links';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: Readonly<HeaderProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <header className={styles.Header + externalClass}>
      <HiddenHeading />
      <Banner />
      <HeaderContent>
        <Logo className={styles.Header__Logo} />
        <ButtonBurgerPanel
          className={styles.Header__ButtonBurgerPanel}
          isActive={false}
          onClick={() => console.log('Click')}
        />
        <Links>
          <LinkIcon counter={8} href="#" type="like" />
          <LinkIcon counter={10} href="#" type="cart" />
        </Links>
      </HeaderContent>
    </header>
  );
}
