import styles from './NavigationLink.module.scss';

interface NavigationLinkProps {
  href: string;
  text: string;
  handleMouseEnter: VoidFunction;
  className?: string;
}

export function NavigationLink({ href, text, handleMouseEnter, className }: Readonly<NavigationLinkProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <a
      className={styles.NavigationLink + externalClass}
      href={href}
      onMouseEnter={handleMouseEnter}
      onFocus={handleMouseEnter}>
      {text}
    </a>
  );
}
