import ImageComponent from '../image/ImageComponent';
import styles from './blogbody.module.css';
type BlogProps = {
  place: {
    name: string;
    photoUrl: string;
    description: string;
    review: string;
  };
};
export default function Blog({ place }: BlogProps) {
  return (
    <div>
      <h1 className={styles.title}>{place.name}</h1>
      <p className={styles.text}>{place.description}</p>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '500px',
          marginTop: '2rem',
        }}
      >
        <ImageComponent src={place.photoUrl} alt='' className={styles.image} />
      </div>
      <div style={{ paddingTop: '1rem' }}>
        <h3 style={{ paddingTop: '1rem' }}>
          Here are some key aspects of {place.name}:
        </h3>
        <p className={styles.text}>{place.review}</p>
      </div>
    </div>
  );
}
