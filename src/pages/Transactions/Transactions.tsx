import { useState } from "react";
import "./Transactions.scss";
import Form from "../../components/TransactionForm/Form";
import TransactionFilters from "../../components/Filters/TransactionFilters";
import TransactionTable from "../../components/TransactionTable/TransactionTable";
import type { Transaction, FilterState } from "../../types/transaction";
import { stringConstant } from "../../utils/stringFile";

const Transactions = () => {
  const { transactionLabel, transactionPageSubHeading } = stringConstant;
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "",
    type: "",
    date: "",
  });

  const [editingTransaction, setEditingTransaction] =
    useState<Transaction | null>(null);

  return (
    <div className="transactions-page">
      <div className="page-header">
        <h1>{transactionLabel}</h1>
        <h3>{transactionPageSubHeading}</h3>
      </div>

      <Form
        editingTransaction={editingTransaction}
        setEditingTransaction={setEditingTransaction}
      />
      <TransactionFilters filters={filters} setFilters={setFilters} />

      <TransactionTable
        filters={filters}
        setEditingTransaction={setEditingTransaction}
      />
    </div>
  );
};

export default Transactions;
