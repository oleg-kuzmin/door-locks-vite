import { HeroContent } from './HeroContent';
import { PaginationBullet } from './PaginationBullet';
import styles from './Hero.module.scss';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: Readonly<HeroProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <section className={styles.Hero + externalClass}>
      <HeroContent>
        <PaginationBullet index={0} indexActiveSlide={1} />
        <PaginationBullet index={1} indexActiveSlide={1} />
        <PaginationBullet index={2} indexActiveSlide={1} />
      </HeroContent>
    </section>
  );
}
