import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './CatalogImage.module.scss';

interface CatalogImageProps {
  activeLink: string;
  isStartImageAnimation: boolean;
  className?: string;
}

export function CatalogImage({ activeLink, isStartImageAnimation, className }: Readonly<CatalogImageProps>) {
  const externalClass = className ? ` ${className}` : '';
  const nodeRef = useRef<HTMLImageElement | null>(null);
  const srcImage = activeLink ? `/categories/${activeLink}.png` : '/categories/default.png';
  const altImage = activeLink || 'Замок по умолчанию';
  const { animateCatalogImage } = styles;
  const timeout = parseInt(animateCatalogImage);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isStartImageAnimation}
      classNames={{ ...styles }}
      timeout={timeout}
      unmountOnExit>
      <img className={styles.CatalogImage + externalClass} ref={nodeRef} src={srcImage} alt={altImage} />
    </CSSTransition>
  );
}
