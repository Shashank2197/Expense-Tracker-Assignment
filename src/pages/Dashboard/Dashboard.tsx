import "./Dashboard.scss";
import SummaryContainer from "../../components/SummaryContainer/SummaryContainer";
import ExpensePieChart from "../../components/Charts/ExpensePieChart";
import MonthlyTrendChart from "../../components/Charts/MonthlyTrendChart";
import { useAppSelector } from "../../redux/hooks";
import { stringConstant } from "../../utils/stringFile";

const Dashboard = () => {
  const { incomeLabel, expenseLabel, dashboardHeading, dashboardSubHeading } =
    stringConstant;
  const transactions = useAppSelector(
    (state) => state.transactions.transactions,
  );

  const totalIncome = transactions
    .filter((transaction) => transaction.type === incomeLabel)
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === expenseLabel)
    .reduce((total, transaction) => total + transaction.amount, 0);

  const currentBalance = totalIncome - totalExpenses;

  const totalTransactions = transactions.length;

  return (
    <div className="dashboard">
      <h1>{dashboardHeading}</h1>
      <h3>{dashboardSubHeading}</h3>

      <div className="cards">
        <SummaryContainer
          title="Total Income"
          value={`₹${totalIncome.toLocaleString()}`}
          variant="income"
        />

        <SummaryContainer
          title="Total Expenses"
          value={`₹${totalExpenses.toLocaleString()}`}
          variant="expense"
        />

        <SummaryContainer
          title="Current Balance"
          value={`₹${currentBalance.toLocaleString()}`}
          variant="balance"
        />

        <SummaryContainer
          title="Total Transactions"
          value={`${totalTransactions.toLocaleString()}`}
          variant="transactions"
        />
      </div>

      <div className="charts">
        <ExpensePieChart transactions={transactions} />
        <MonthlyTrendChart transactions={transactions} />
      </div>
    </div>
  );
};

export default Dashboard;
