# Personal Expense Tracker

## Overview

A responsive Personal Expense Tracker built with React, TypeScript, Redux Toolkit, and SCSS.

The application allows users to:

- Add transactions
- Edit transactions
- Delete transactions
- Filter transactions by title, category, type, and date
- View income and expense summaries
- Visualize spending trends through charts
- Manage transaction records in a centralized Redux store

---

## Tech Stack

- React
- TypeScript
- Redux Toolkit
- React Redux
- SCSS
- Vite

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd personal-expense-tracker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Application will be available at:

```text
http://localhost:5173
```

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```text
src
│
├── App.tsx
├── App.scss
├── main.tsx
│
├── routes
│   └── appRoutes.tsx
│
├── pages
│   ├── Dashboard
│   │   ├── Dashboard.tsx
│   │   └── Dashboard.scss
│   │
│   └── Transactions
│       ├── Transactions.tsx
│       └── Transactions.scss
│
├── components
│   │
│   ├── Header
│   │   ├── Header.tsx
│   │   └── Header.scss
│   │
│   ├── SummaryCointainer
│   │   ├── SummaryCointainer.tsx
│   │   └── SummaryCointainer.scss
│   │
│   ├── TransactionForm
│   │   ├── Form.tsx
│   │   └── Form.scss
│   │
│   ├── Filters
│   │   ├── TransactionFilters.tsx
│   │   └── TransactionFilters.scss
│   │
│   ├── TransactionTable
│   │   ├── TransactionTable.tsx
│   │   └── TransactionTable.scss
│   │
│   └── Charts
│       ├── ExpensePieChart.tsx
│       ├── ExpensePieChart.scss
│       ├── MonthlyTrendChart.tsx
│       └── MonthlyTrendChart.scss
│
├── app
│   └──── store.ts
│
├── redux
│   ├── hooks.ts
│   └── slices
│       └── transactionSlice.ts
│
├── utils
│   └── localStorage.ts
│   └── stringFiles.ts
├── types
│   └── transaction.ts
│
│
└──── styles
    ├── _variables.scss
    ├── _color.scss
    └── global.scss


```

---

## Features

### Transaction Management

- Add new transactions
- Edit existing transactions
- Delete transactions

### Filtering

- Search by title
- Filter by category
- Filter by transaction type
- Filter by date

### Dashboard

- Total Income
- Total Expenses
- Balance Summary
- Transaction Charts

### State Management

- Redux Toolkit for centralized state management
- Single source of truth for transactions

---

## Assumptions Made

### Known Decisions

- Table layout uses fixed column widths to prevent UI shifting caused by varying amount lengths.
- Filtering is performed client-side on Redux state.
- Edit functionality reuses the same form component for both create and update operations.

### Transaction IDs

Transaction IDs are generated using:

```ts
Date.now().toString();
```

### Data Persistence

Transactions are stored in Redux state.

Data will reset when the application is refreshed unless persistence is added.

### Categories

Categories are user-defined and can be reused across transactions.

### Date Format

Transactions use the browser date input format:

```text
YYYY-MM-DD
```

### Validation

Basic client-side validation is implemented:

- Title is required
- Amount is required
- Category is required
- Date is required

---

## Future Ongoing Improvements

- Reuseable string values for JSX (string file) and SCSS (variable and color file)
- Modal-based Add/Edit transaction form
- Category management
- Sorting by amount and date
- Pagination
- Toast Alert Notifications

---
