import styles from "./card.module.css";

interface ModuleProps {
  title: string;
  subtitle: string;
  desc: string;
}

export default function Module({ title, subtitle, desc }: ModuleProps) {
  return (
    <div className={styles.text_container}>
      <h4>{title}</h4>
      <h2>{subtitle}</h2>
      <p>{desc}</p>
    </div>
  );
}
