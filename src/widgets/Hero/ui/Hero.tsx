import { HeroContent } from './HeroContent';
import styles from './Hero.module.scss';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: Readonly<HeroProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <section className={styles.Hero + externalClass}>
      <HeroContent>12345</HeroContent>
    </section>
  );
}
