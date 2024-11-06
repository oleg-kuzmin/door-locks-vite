## Особенности

- архитектура FSD
- npm-скрипт для проверки архитектуры (steiger)
- поддержка aliases (`pkg-dir` вместо `__dirname` для корректной работы steiger c aliases)
- сортировка импортов модулей (prettier-plugin-sort-imports)
- сортировка стилей css (@trivago/prettier-plugin-sort-imports)
- css-переходы (react-transition-group)
- https://www.figma.com/file/SXRi6her3g4Ebo6yUCojnj/%D0%9C%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD-%D0%B7%D0%B0%D0%BC%D0%BA%D0%BE%D0%B2-Copy?node-id=0%3A1

## Тех долг

- сделать вертикальный скролл
- проверить разметку
- может быть на карточке сделать анимацию: тень цвет прозрачный => тень цвет черный
- проверить скорость листания
- проверить user-select

- исправить
  .ProductPrice {
  display: flex;
  align-items: center;
  margin-bottom: 17px;
  gap: 8px;

  @include media-desktop {
  margin-bottom: 18px;
  gap: 12px;
  }
  }
