import styles from './button.module.css';
import Link from 'next/link';

type btnProps = {
  url: string;
  className?: string;
  children: React.ReactNode;
} & React.ComponentProps<'button'>;

export default function Button({
  url,
  children,
  className = '',
  ...restProps
}: btnProps) {
  return (
    <Link href={url} className={styles.container}>
      <button {...restProps} className={styles.button_link}>
        {children}
      </button>
    </Link>
  );
}
