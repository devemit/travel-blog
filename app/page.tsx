import styles from './home-page.module.css';
import Button from '@/components/button/Button';
import ImageComponent from '@/components/image/ImageComponent';
import HeroCard from '@/components/hero-card/hero-card';

export default function Home() {
  return (
    <main className={styles.main_container}>
      <section className={styles.content}>
        <div className={styles.image_wrapper}>
          <ImageComponent
            src={'/beach.webp'}
            alt={'beach-picture'}
            className={styles.image}
          />
        </div>
        <div className='hero-card_container'>
          <HeroCard>
            <h1>Wander the World</h1>
            <h3>From short breaks to long adventures.</h3>
            <p>
              Travel blog featuring travel tips, guides, and photography from
              around the world. Whether you need guidance for your first trip,
              or you are a seasoned traveler looking for destination
              inspiration, you have come to the right place!
            </p>
          </HeroCard>
          <Button url='/blog'>Read our Blog</Button>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.image_wrapper}>
          <ImageComponent
            src={'/camera.webp'}
            alt={'camera-picture'}
            className={styles.image}
          />
        </div>
        <div className='hero-card_container'>
          <HeroCard>
            <h1>About Us</h1>
            <h3>Adventurers and Storytellers</h3>
            <p>
              Through our award-winning blog, we love to provide travelers with
              guidance and inspiration and connect them to meaningful
              experiences as they travel the world with curiosity!
            </p>
          </HeroCard>
          <Button url='/about'>Learn about us</Button>
        </div>
      </section>
    </main>
  );
}
