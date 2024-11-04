import { DesktopList } from './DesktopList';
import { MobileList } from './MobileList';
import { useMediaDesktop } from 'shared/lib';
import { ButtonLinkMain, SectionTitle } from 'shared/ui';
import styles from './Categories.module.scss';

interface CategoriesProps {
  className?: string;
}

export function Categories({ className }: Readonly<CategoriesProps>) {
  const externalClass = className ? ` ${className}` : '';
  const { mediaDesktop } = useMediaDesktop();

  return (
    <section className={styles.Categories + externalClass}>
      <SectionTitle className={styles.Categories__Title} text="Категории" />
      {mediaDesktop ? <DesktopList /> : <MobileList />}
      <ButtonLinkMain className={styles.Categories__ButtonLinkMain} href="#" text="Все категории" />
    </section>
  );
}
