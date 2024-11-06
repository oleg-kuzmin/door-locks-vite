import { Category } from './Category';

interface Review {
  name: string;
  date: Date;
  comments: string[];
  rating: 1 | 2 | 3 | 4 | 5;
}

interface Characteristics {
  brand: string; // Бренд
  color: string; // Цвет
  type: string; // Тип
  purpose: string; // Назначение
  mechanism: string; // Тип механизма
  size: string; // Размеры
  features: string[]; // Особенности
  unlockingInside: string; // Способ отпирания изнутри
  unlockingOutside: string; // Способ отпирания снаружи
  counterCrossbars: string; // Количество ригелей
  doorSide: string; // Сторона двери
  material: string; // Материал
  counterKeys: string; // Количество ключей
  weight: string; // Вес
  guarantee: string; // Гарантийный срок
}

export interface Product {
  id: string;
  title: string;
  displayName: string;
  srcImage: string[];
  altImage: string;
  description: string;
  newPrice: string;
  oldPrice: string;
  category: Category;
  characteristics: Characteristics[];
  isMain: boolean;
  inStock: boolean;
  reviews: Review[];
}
