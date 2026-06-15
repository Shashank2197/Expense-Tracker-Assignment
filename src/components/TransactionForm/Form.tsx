import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./TransactionForm.scss";

import { useAppDispatch } from "../../redux/hooks";
import { addTransaction } from "../../redux/slices/transactionSlice";

const Form = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    type: "Expense",
    date: "",
  });

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

    dispatch(
      addTransaction({
        id: Date.now().toString(),
        title: formData.title,
        amount: Number(formData.amount),
        category: formData.category,
        type: formData.type as "Income" | "Expense",
        date: formData.date,
      }),
    );

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

      <div className="form-row">
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="primary-btn">
        Add Transaction
      </button>
    </form>
  );
};

export default Form;
