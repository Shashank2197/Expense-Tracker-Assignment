import "./TransactionTable.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { deleteTransaction } from "../../redux/slices/transactionSlice";
import type { TransactionTableProps } from "../../types/transaction";

const TransactionTable = ({
  filters,
  setEditingTransaction,
}: TransactionTableProps) => {
  const dispatch = useAppDispatch();

  const transactions = useAppSelector(
    (state) => state.transactions.transactions ?? [],
  );

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    const matchesCategory =
      !filters.category ||
      transaction.category
        .toLowerCase()
        .includes(filters.category.toLowerCase());

    const matchesType = !filters.type || transaction.type === filters.type;

    const matchesDate = !filters.date || transaction.date === filters.date;

    return matchesSearch && matchesCategory && matchesType && matchesDate;
  });

  return (
    <div className="table-container">
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredTransactions.length === 0 ? (
            <tr>
              <td colSpan={6} className="empty-state">
                No Transactions Found
              </td>
            </tr>
          ) : (
            filteredTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>

                <td>₹{transaction.amount.toLocaleString()}</td>

                <td>{transaction.category}</td>

                <td>
                  <span
                    className={`badge ${
                      transaction.type === "Income" ? "income" : "expense"
                    }`}
                  >
                    {transaction.type}
                  </span>
                </td>

                <td>{transaction.date}</td>

                <td>
                  <div className="actions">
                    {/* ✅ EDIT BUTTON */}
                    <button
                      className="edit-btn"
                      onClick={() => setEditingTransaction(transaction)}
                    >
                      Edit
                    </button>

                    {/* DELETE BUTTON */}
                    <button
                      className="delete-btn"
                      onClick={() =>
                        dispatch(deleteTransaction(transaction.id))
                      }
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
