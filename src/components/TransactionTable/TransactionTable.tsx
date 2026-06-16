import "./TransactionTable.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { deleteTransaction } from "../../redux/slices/transactionSlice";
import type { TransactionTableProps } from "../../types/transaction";
import { stringConstant, tableHeaderStrings } from "../../utils/stringFile";

const TransactionTable = ({
  filters,
  setEditingTransaction,
}: TransactionTableProps) => {
  const { noTransactionAvailable, incomeLabel, expenseLabel } = stringConstant;
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
            {tableHeaderStrings.map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {filteredTransactions.length === 0 ? (
            <tr>
              <td colSpan={6} className="empty-state">
                {noTransactionAvailable}
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
                      transaction.type === incomeLabel ? "income" : "expense"
                    }`}
                  >
                    {transaction.type}
                  </span>
                </td>

                <td>{transaction.date}</td>

                <td>
                  <div className="actions">
                    <button
                      className="edit-btn"
                      onClick={() => setEditingTransaction(transaction)}
                    >
                      Edit
                    </button>

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
