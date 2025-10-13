import { type Transaction } from "../types/types";

export const data: Transaction[] = [
  {
    id: 1,
    date: new Date("2025-01-02"),
    description: "Client Invoice Payment",
    type: "income",
    amount: 1200,
    account: "Business Checking",
  },

  {
    id: 2,
    date: new Date("2025-01-04"),
    description: "Office Rent",
    type: "expense",
    amount: -800,
    account: "Business Savings",
  },
  {
    id: 3,
    date: new Date("2025-01-06"),
    description: "Software Subscription",
    type: "expense",
    amount: -150,
    account: "Business Checking",
  },
  {
    id: 4,
    date: new Date("2025-01-10"),
    description: "Equipment Purchase",
    type: "expense",
    amount: -300,
    account: "Business Checking",
  },
  {
    id: 5,
    date: new Date("2025-01-14"),
    description: "Consulting Revenue",
    type: "income",
    amount: 950,
    account: "Business Checking",
  },
  {
    id: 6,
    date: new Date("2025-01-18"),
    description: "Utility Bill",
    type: "expense",
    amount: -120,
    account: "Business Checking",
  },
  {
    id: 7,
    date: new Date("2025-01-20"),
    description: "Tax Reserve Transfer",
    type: "expense",
    amount: -500,
    account: "Business Checking",
  },
  {
    id: 8,
    date: new Date("2025-01-20"),
    description: "Tax Reserve Transfer (Deposit)",
    type: "income",
    amount: 500,
    account: "Business Savings",
  },
];
