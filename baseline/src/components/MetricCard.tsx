import styles from "./MetricCard.module.css";

type MetricCardProps = {
  value: string | number;
  label: string;
};

export const MetricCard = ({ value, label }: MetricCardProps) => {
  return (
    <div className={styles.moduleBox}>
      <div>{value}</div>
      <div>{label}</div>
    </div>
  );
};