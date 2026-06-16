import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./MonthlyTrendChart.scss";
import { Line } from "react-chartjs-2";
import type { MonthlyTrendChartProps } from "../../types/transaction";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

const MonthlyTrendChart = ({ transactions }: MonthlyTrendChartProps) => {
  const monthlyData: Record<
    string,
    {
      income: number;
      expense: number;
    }
  > = {};

  transactions.forEach((transaction) => {
    const month = new Date(transaction.date).toLocaleString("default", {
      month: "short",
      year: "numeric",
    });

    if (!monthlyData[month]) {
      monthlyData[month] = {
        income: 0,
        expense: 0,
      };
    }

    if (transaction.type === "Income") {
      monthlyData[month].income += transaction.amount;
    } else {
      monthlyData[month].expense += transaction.amount;
    }
  });

  const labels = Object.keys(monthlyData);

  const data = {
    labels,

    datasets: [
      {
        label: "Income",

        data: labels.map((month) => monthlyData[month].income),

        borderColor: "#22C55E",

        backgroundColor: "rgba(34, 197, 94, 0.2)",

        tension: 0.3,
      },

      {
        label: "Expense",

        data: labels.map((month) => monthlyData[month].expense),

        borderColor: "#EF4444",

        backgroundColor: "rgba(239, 68, 68, 0.2)",

        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "top" as const,
      },

      title: {
        display: true,

        text: "Monthly Income vs Expense Trend",
      },
    },
  };

  if (transactions.length === 0) {
    return <div className="empty-chart">No transaction data available</div>;
  }

  return (
    <div
      style={{
        height: "300px",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default MonthlyTrendChart;
