import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import Card from "@/components/card/Card";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      {/* card 1 */}
      <div className={styles.content}>
        <div className={styles.image_container}>
          <Image src="/beach.webp" alt="beach" fill className={styles.image} />
        </div>
        <div>
          <Card
            title="Wander the World"
            subtitle="From short breaks to long adventures."
            desc=" Travel blog featuring travel tips, guides, and photography from
            around the world. Whether you need guidance for your first trip, or
            you are a seasoned traveler looking for destination inspiration,
            you have come to the right place!"
          />
          <Button url="/blog" text="Read our blog" />
        </div>
      </div>
      {/* card 2 */}
      <div className={styles.content}>
        <div className={styles.image_container}>
          <Image src="/camera.webp" alt="beach" fill className={styles.image} />
        </div>
        <div>
          <Card
            title="About Us"
            subtitle="Adventurers and Storytellers"
            desc="Through our award-winning blog, we love to provide travelers with guidance and inspiration and connect them to meaningful experiences as they travel the world with curiosity!"
          />
          <Button url="/about" text="Learn about us" />
        </div>
      </div>
    </main>
  );
}
