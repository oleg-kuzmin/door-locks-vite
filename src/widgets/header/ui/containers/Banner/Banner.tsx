import { BannerText } from '../../components/BannerText';
import { LinkCallForm } from 'shared/ui';
import styles from './Banner.module.scss';

interface BannerProps {
  className?: string;
}

export function Banner({ className }: Readonly<BannerProps>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.Banner + externalClass}>
      <BannerText className={styles.Banner__Text} />
      <LinkCallForm className={styles.Banner__LinkCallForm} />
    </div>
  );
}
