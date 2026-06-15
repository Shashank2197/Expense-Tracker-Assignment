import "./Dashboard.scss";
import SummaryContainer from "../../components/SummaryContainer/SummaryContainer";
// import ExpensePieChart from "../../components/Charts/ExpensePieChart";
// import MonthlyTrendChart from "../../components/Charts/MonthlyTrendChart";

// import { useAppSelector } from "../../redux/hooks";

const Dashboard = () => {
  //   const transactions = useAppSelector(
  //     (state) => state.transactions.transactions,
  //   );

  //   const totalIncome = transactions
  //     .filter((transaction) => transaction.type === "Income")
  //     .reduce((total, transaction) => total + transaction.amount, 0);

  //   const totalExpenses = transactions
  //     .filter((transaction) => transaction.type === "Expense")
  //     .reduce((total, transaction) => total + transaction.amount, 0);

  //   const currentBalance = totalIncome - totalExpenses;

  //   const totalTransactions = transactions.length;

  return (
    <div className="dashboard">
      <h1>Expense Tracker Dashboard</h1>

      <div className="cards">
        <SummaryContainer
          title="Total Income"
          //  value={`₹${totalIncome}`}
          value="0"
          variant="income"
        />

        <SummaryContainer
          title="Total Expenses"
          //  value={`₹${totalExpenses}`}
          value="0"
          variant="expense"
        />

        <SummaryContainer
          title="Current Balance"
          //  value={`₹${currentBalance}`}
          value="0"
          variant="balance"
        />

        <SummaryContainer
          title="Total Transactions"
          //  value={`${totalTransactions}`}
          value="0"
          variant="transactions"
        />
      </div>

      <div className="charts">
        {/* <ExpensePieChart transactions={transactions} />

        <MonthlyTrendChart transactions={transactions} /> */}
      </div>
    </div>
  );
};

export default Dashboard;
