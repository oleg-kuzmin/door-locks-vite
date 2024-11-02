interface BannerTextProps {
  className?: string;
}

export function BannerText({ className }: Readonly<BannerTextProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <p className={externalClass}>Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09</p>;
}
