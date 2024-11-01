import { ButtonBurgerPanel } from './components/ButtonBurgerPanel';
import { HiddenHeading } from './components/HiddenHeading';
import { LinkIcon } from './components/LinkIcon';
import { Logo } from './components/Logo';
import { Banner } from './containers/Banner';
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
      <div className={styles.Header__Content}>
        <Logo className={styles.Header__Logo} />
        <ButtonBurgerPanel
          className={styles.Header__ButtonBurgerPanel}
          isActive={false}
          onClick={() => console.log('Click')}
        />
        <div className={styles.Header__Icons}>
          <LinkIcon counter={8} href="#" type="like" />
          <LinkIcon counter={10} href="#" type="cart" />
        </div>
      </div>
    </header>
  );
}
