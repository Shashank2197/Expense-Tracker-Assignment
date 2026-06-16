import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Transaction, TransactionState } from "../../types/transaction";
import { loadTransactions, saveTransactions } from "../../utils/localStorage";
import { stringConstant } from "../../utils/stringFile";

const { transactionLabel } = stringConstant;

const initialState: TransactionState = {
  transactions: loadTransactions(),
};

const transactionSlice = createSlice({
  name: transactionLabel,
  initialState,

  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);

      saveTransactions(state.transactions);
    },

    updateTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions = state.transactions.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );

      saveTransactions(state.transactions);
    },

    deleteTransaction: (state, action: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(
        (item) => item.id !== action.payload,
      );

      saveTransactions(state.transactions);
    },
  },
});

export const { addTransaction, updateTransaction, deleteTransaction } =
  transactionSlice.actions;

export default transactionSlice.reducer;
