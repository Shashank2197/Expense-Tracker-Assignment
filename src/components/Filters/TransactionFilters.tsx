import "./TransactionFilters.scss";
import type { ChangeEvent } from "react";
import type { FiltersProps } from "../../types/transaction";
import { stringConstant } from "../../utils/stringFile";

const TransactionFilters = ({ filters, setFilters }: FiltersProps) => {
  const { allTypesLabel, incomeLabel, expenseLabel } = stringConstant;
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="filters">
      <input
        type="text"
        name="search"
        placeholder="Search by title..."
        value={filters.search}
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={filters.category}
        onChange={handleChange}
      />

      <select name="type" value={filters.type} onChange={handleChange}>
        <option value="">{allTypesLabel}</option>
        <option value="Income">{incomeLabel}</option>
        <option value="Expense">{expenseLabel}</option>
      </select>

      <input
        type="date"
        name="date"
        value={filters.date}
        onChange={handleChange}
      />
    </div>
  );
};

export default TransactionFilters;
