'use client';
import Link from 'next/link';
import styles from './nav.module.css';
import { pages } from '@/utils/pages';
import Image from 'next/image';
import logo from 'public/travel-blog-logo.webp';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Image src={logo} alt='logo' className={styles.logo} />
        <p>My Travel Blog</p>
      </div>
      <div className={styles.nav_items}>
        {pages.map((page, id) => (
          <>
            <Link
              key={id}
              className={`${styles.nav_item} ${
                pathname === page.href && styles.active
              }`}
              href={page.href}
            >
              {page.label}
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}
