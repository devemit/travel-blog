import styles from './hero-card.module.css';

type ModuleProps = {
  children: React.ReactNode;
};

export default function HeroCard({ children, ...restProps }: ModuleProps) {
  return (
    <div {...restProps} className={styles.text_container}>
      {children}
    </div>
  );
}
