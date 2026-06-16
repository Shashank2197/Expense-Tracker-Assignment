import { useState, useEffect } from "react";
import "./Form.scss";
import type { ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "../../redux/hooks";
import {
  addTransaction,
  updateTransaction,
} from "../../redux/slices/transactionSlice";
import type { TransactionFormProps } from "../../types/transaction";

const Form = ({
  editingTransaction,
  setEditingTransaction,
}: TransactionFormProps) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    type: "Expense",
    date: "",
  });

  useEffect(() => {
    if (editingTransaction) {
      setFormData({
        title: editingTransaction.title,
        amount: editingTransaction.amount.toString(),
        category: editingTransaction.category,
        type: editingTransaction.type,
        date: editingTransaction.date,
      });
    }
  }, [editingTransaction]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.amount ||
      !formData.category ||
      !formData.date
    ) {
      alert("Please fill all fields");
      return;
    }

    const transactionData = {
      title: formData.title,
      amount: Number(formData.amount),
      category: formData.category,
      type: formData.type as "Income" | "Expense",
      date: formData.date,
    };

    if (editingTransaction) {
      dispatch(
        updateTransaction({
          ...transactionData,
          id: editingTransaction.id,
        }),
      );

      setEditingTransaction(null);
    } else {
      dispatch(
        addTransaction({
          ...transactionData,
          id: Date.now().toString(),
        }),
      );
    }

    setFormData({
      title: "",
      amount: "",
      category: "",
      type: "Expense",
      date: "",
    });
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      {editingTransaction && (
        <div className="edit-banner">
          Editing: <strong>{editingTransaction.title}</strong>
        </div>
      )}
      <div className="form-row">
        <input
          type="text"
          name="title"
          placeholder="Transaction Title"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />

        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Income">Income</option>

          <option value="Expense">Expense</option>
        </select>
      </div>

      <div className="form-row date-row">
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <div className="form-actions">
        {editingTransaction && (
          <button
            type="button"
            className="cancel-btn"
            onClick={() => {
              setEditingTransaction(null);

              setFormData({
                title: "",
                amount: "",
                category: "",
                type: "Expense",
                date: "",
              });
            }}
          >
            Cancel
          </button>
        )}

        <button type="submit" className="primary-btn">
          {editingTransaction ? "Update Transaction" : "Add Transaction"}
        </button>
      </div>
    </form>
  );
};

export default Form;
