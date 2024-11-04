import { Advantages } from 'widgets/Advantages';
import { Header } from 'widgets/Header';
import { Hero } from 'widgets/Hero';
import { Statistics } from 'widgets/Statistics';
import styles from './HomePage.module.scss';

export function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Statistics />
      <Advantages className={styles.HomePage__Advantages} />
    </>
  );
}
