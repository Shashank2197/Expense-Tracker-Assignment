export type TransactionType = "Income" | "Expense";

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: TransactionType;
  date: string;
}

export interface SummaryProps {
  title: string;
  value: string;
}

export interface FilterState {
  search: string;
  category: string;
  type: string;
  date: string;
}

export interface SummaryCardProps {
  title: string;
  value: string;
  variant: "income" | "expense" | "balance" | "transactions";
}

export interface TransactionFormProps {
  editingTransaction: Transaction | null;
  setEditingTransaction: React.Dispatch<
    React.SetStateAction<Transaction | null>
  >;
}
