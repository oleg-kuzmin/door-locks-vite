import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { DesktopButton } from './DesktopButton';
import { DesktopUi } from './DesktopUi';
import { PopularProductsTop } from './PopularProductsTop';
import { ProductCard } from 'entities/ProductCard';
import { SectionTitle } from 'shared/ui';
import 'swiper/css';
import styles from './PopularProducts.module.scss';

interface PopularProductsProps {
  className?: string;
}

export function PopularProducts({ className }: Readonly<PopularProductsProps>) {
  const [indexActiveSlide, setIndexActiveSlide] = useState(1);
  const [isButtonsDisabled, setIsButtonsDisabled] = useState({ prev: false, next: false });
  const swiperRef = useRef<SwiperClass | null>(null);
  const externalClass = className ? ` ${className}` : '';

  const swiperConfig = {
    className: styles.PopularProducts__Swiper,
    slidesPerView: 'auto' as const,
    slidesPerGroupAuto: true,
    spaceBetween: 10,
    breakpoints: {
      0: {
        allowTouchMove: true,
        slidesPerGroup: 1,
      },
      768: {
        allowTouchMove: true,
        slidesPerGroup: 2,
      },
      1024: {
        allowTouchMove: true,
        slidesPerGroup: 3,
      },
      1440: {
        allowTouchMove: false,
        slidesPerGroup: 4,
        speed: 1000,
      },
    },
  };

  const setButtons = (index: number) => {
    if (swiperRef.current?.slides.length) {
      const isPossibleNext = index < swiperRef.current?.slides.length - 4;
      const isPossiblePrev = index > 4;
      if (isPossiblePrev && isPossibleNext) {
        setIsButtonsDisabled({ prev: false, next: false });
      }
      if (isPossiblePrev && !isPossibleNext) {
        setIsButtonsDisabled({ prev: false, next: true });
      }
      if (!isPossiblePrev && isPossibleNext) {
        setIsButtonsDisabled({ prev: true, next: false });
      }
      if (!isPossiblePrev && !isPossibleNext) {
        setIsButtonsDisabled({ prev: true, next: true });
      }
    }
  };

  const handleClickPrev = () => {
    if (swiperRef.current?.slides.length && indexActiveSlide - 4 > 0) {
      setIndexActiveSlide(indexActiveSlide - 4);
      swiperRef.current?.slideTo(indexActiveSlide - 4);
    }
  };

  const handleClickNext = () => {
    if (swiperRef.current?.slides.length && indexActiveSlide + 4 < swiperRef.current?.slides.length) {
      setIndexActiveSlide(indexActiveSlide + 4);
      swiperRef.current?.slideTo(indexActiveSlide + 4);
    }
  };

  useEffect(() => {
    setButtons(indexActiveSlide);
  }, [indexActiveSlide]);

  return (
    <section className={styles.PopularProducts + externalClass}>
      <PopularProductsTop>
        <SectionTitle className={styles.PopularProducts__Title} text="Наши популярные продукты" />
        <DesktopUi className={styles.PopularProducts__DesktopUi}>
          <DesktopButton type="prev" isDisabled={isButtonsDisabled.prev} onClick={handleClickPrev} />
          <DesktopButton type="next" isDisabled={isButtonsDisabled.next} onClick={handleClickNext} />
        </DesktopUi>
      </PopularProductsTop>
      <Swiper
        {...swiperConfig}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        onSlideChange={swiper => {
          setIndexActiveSlide(swiper.realIndex + 1);
        }}>
        <SwiperSlide className={styles.PopularProducts__Slide}>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className={styles.PopularProducts__Slide}>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className={styles.PopularProducts__Slide}>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className={styles.PopularProducts__Slide}>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className={styles.PopularProducts__Slide}>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className={styles.PopularProducts__Slide}>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className={styles.PopularProducts__Slide}>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className={styles.PopularProducts__Slide}>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
