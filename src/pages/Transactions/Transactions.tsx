import { useState } from "react";
import "./Transactions.scss";
import Form from "../../components/TransactionForm/Form";
import TransactionFilters from "../../components/Filters/TransactionFilters";
import TransactionTable from "../../components/TransactionTable/TransactionTable";
import type { FilterState } from "../../types/filter";
import type { Transaction } from "../../types/transaction";

const Transactions = () => {
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
        <h1>Transactions</h1>

        <p>Manage your income and expenses</p>
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
