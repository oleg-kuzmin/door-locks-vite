import { useRef, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { HeroButton } from './HeroButton';
import { HeroContent } from './HeroContent';
import { HeroPagination } from './HeroPagination';
import { HeroUi } from './HeroUi';
import { PaginationBullet } from './PaginationBullet';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import styles from './Hero.module.scss';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: Readonly<HeroProps>) {
  const [indexActiveSlide, setIndexActiveSlide] = useState(1);
  const swiperRef = useRef<SwiperClass | null>(null);
  const externalClass = className ? ` ${className}` : '';

  const swiperConfig = {
    allowTouchMove: true,
    initialSlide: 1,
    loop: true,
    // modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  };

  const handleClickPrev: VoidFunction = () => {
    swiperRef.current?.slidePrev();
  };

  const handleClickNext: VoidFunction = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className={styles.Hero + externalClass}>
      <HeroContent>
        <Swiper
          {...swiperConfig}
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          onSlideChange={swiper => {
            setIndexActiveSlide(swiper.realIndex);
          }}>
          <SwiperSlide>
            <h1>Slide 1</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Slide 2</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Slide 3</h1>
          </SwiperSlide>
        </Swiper>

        <HeroUi className={styles.Hero__Ui}>
          <HeroButton type="prev" onClick={handleClickPrev} />
          <HeroPagination>
            <PaginationBullet index={0} indexActiveSlide={indexActiveSlide} />
            <PaginationBullet index={1} indexActiveSlide={indexActiveSlide} />
            <PaginationBullet index={2} indexActiveSlide={indexActiveSlide} />
          </HeroPagination>
          <HeroButton type="next" onClick={handleClickNext} />
        </HeroUi>
      </HeroContent>
    </section>
  );
}
