import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import type { ExpensePieChartProps } from "../../types/transaction";
import "./ExpensePieChart.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensePieChart = ({ transactions }: ExpensePieChartProps) => {
  const expenses = transactions.filter(
    (transaction) => transaction.type === "Expense",
  );

  const categoryTotals: Record<string, number> = {};

  expenses.forEach((transaction) => {
    categoryTotals[transaction.category] =
      (categoryTotals[transaction.category] || 0) + transaction.amount;
  });

  const data = {
    labels: Object.keys(categoryTotals),

    datasets: [
      {
        label: "Expenses",

        data: Object.values(categoryTotals),

        backgroundColor: [
          "#4F46E5",
          "#22C55E",
          "#EF4444",
          "#F59E0B",
          "#06B6D4",
          "#8B5CF6",
          "#EC4899",
          "#14B8A6",
        ],

        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom" as const,
      },

      title: {
        display: true,

        text: "Expense Distribution by Category",
      },
    },
  };

  if (expenses.length === 0) {
    return <div className="empty-chart">No expense data available</div>;
  }

  return (
    <div
      style={{
        height: "300px",
      }}
    >
      <Pie data={data} options={options} />
    </div>
  );
};

export default ExpensePieChart;
