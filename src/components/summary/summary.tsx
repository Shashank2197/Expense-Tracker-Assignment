import type { SummaryProps } from "../../types/transaction";

const SummaryCard = ({ title, value }: SummaryProps) => {
  return (
    <div className="card">
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
};

export default SummaryCard;
