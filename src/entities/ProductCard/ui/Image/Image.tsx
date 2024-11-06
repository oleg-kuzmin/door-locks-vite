import styles from './Image.module.scss';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function Image({ src, alt, className }: Readonly<ImageProps>) {
  const externalClass = className ? ` ${className}` : '';
  return <img className={styles.Image + externalClass} src={src}></img>;
}
