import styles from './card.module.css';

type ModuleProps = {
  children: React.ReactNode;
};

export default function Module({ children, ...restProps }: ModuleProps) {
  return (
    <div {...restProps} className={styles.text_container}>
      {children}
    </div>
  );
}
