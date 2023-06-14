import styles from "./button.module.css";
import Link from "next/link";

interface btnProps {
  text: string;
  url: string;
}

export default function Button({ text, url }: btnProps) {
  return (
    <div className={styles.container} style={{ paddingTop: "4rem" }}>
      <Link href={url} className={styles.btnLink}>
        {text}
      </Link>
    </div>
  );
}
