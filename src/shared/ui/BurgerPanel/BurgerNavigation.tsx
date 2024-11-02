import { ReactNode } from 'react';

interface BurgerNavigationProps {
  children: ReactNode;
  className?: string;
}

export function BurgerNavigation({ children, className }: Readonly<BurgerNavigationProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <nav className={externalClass}>{children}</nav>;
}
