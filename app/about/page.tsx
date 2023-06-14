import styles from "./page.module.css";

export default function page() {
  return (
    <div className={styles.container}>
      <h2>About Us</h2>
      <p className={styles.desc}>
        We are a travel blog featuring travel tips, guides, and photography from
        around the world. Whether you need guidance for your first trip, or
        you're a seasoned traveler looking for destination inspiration, you've
        come to the right place!
      </p>
      <span className={styles.quote}>
        Jobs fill your pockets, adventures fill your soul.
      </span>
      <div style={{ marginTop: "3rem" }}>
        <h2>Our Mission</h2>
        <p className={styles.desc}>
          Through our award-winning blog, we love to provide travelers with
          guidance and inspiration and connect them to meaningful experiences as
          they travel the world with curiosity!
        </p>
      </div>
    </div>
  );
}
