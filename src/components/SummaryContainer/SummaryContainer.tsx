import "./SummaryContainer.scss";
import type { SummaryCardProps } from "../../types/transaction";

const SummaryCard = ({ title, value, variant }: SummaryCardProps) => {
  return (
    <div className={`summary-card ${variant}`}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
};

export default SummaryCard;
