import "./Transactions.scss";

import Form from "../../components/TransactionForm/Form";
// import TransactionFilters from "../../components/Filters/TransactionFilters";
// import TransactionTable from "../../components/TransactionTable/TransactionTable";

const Transactions = () => {
  return (
    <div className="transactions-page">
      <div className="page-header">
        <h1>Transactions</h1>
        <p>Manage your income and expenses</p>
      </div>

      <Form />
      {/* <TransactionFilters />
      <TransactionTable /> */}
    </div>
  );
};

export default Transactions;
