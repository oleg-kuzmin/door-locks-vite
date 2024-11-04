import { HeroContent } from './HeroContent';
import { HeroPagination } from './HeroPagination';
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
        <HeroPagination>
          <PaginationBullet index={0} indexActiveSlide={1} />
          <PaginationBullet index={1} indexActiveSlide={1} />
          <PaginationBullet index={2} indexActiveSlide={1} />
        </HeroPagination>
      </HeroContent>
    </section>
  );
}
