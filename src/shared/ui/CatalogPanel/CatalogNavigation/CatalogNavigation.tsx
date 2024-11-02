import { ReactNode } from 'react';

interface CatalogNavigationProps {
  children: ReactNode;
  className?: string;
}

export function CatalogNavigation({ children, className }: Readonly<CatalogNavigationProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <nav className={externalClass}>{children}</nav>;
}
