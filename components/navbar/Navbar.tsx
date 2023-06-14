import Link from "next/link";
import styles from "./navbar.module.css";
import { pages } from "@/lib/pages";
import Image from "next/image";
import logo from "public/travel-blog-logo.webp";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <p>My Travel Blog</p>
      </div>
      <div className={styles.nav_items}>
        {pages.map((page, id) => (
          <Link key={id} className={styles.nav_item} href={page.href}>
            {page.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
