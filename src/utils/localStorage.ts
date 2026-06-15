import type { Transaction } from "../types/transaction";
import { stringConstant } from "./stringFile";

const { transactionLabel } = stringConstant;

export const loadTransactions = () => {
  const data = localStorage.getItem(transactionLabel);

  if (!data) return [];

  return JSON.parse(data);
};

export const saveTransactions = (transactions: Transaction[]) => {
  localStorage.setItem(transactionLabel, JSON.stringify(transactions));
};
