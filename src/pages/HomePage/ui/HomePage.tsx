import { Advantages } from 'widgets/Advantages';
import { Categories } from 'widgets/Categories/Categories';
import { Header } from 'widgets/Header';
import { Hero } from 'widgets/Hero';
import { PopularProducts } from 'widgets/PopularProducts';
import { Statistics } from 'widgets/Statistics';
import { ProductCard } from 'entities/ProductCard';
import styles from './HomePage.module.scss';

export function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Statistics />
      <Advantages className={styles.HomePage__Advantages} />
      <Categories className={styles.HomePage__Categories} />
      <PopularProducts />
      <ProductCard />
    </>
  );
}
