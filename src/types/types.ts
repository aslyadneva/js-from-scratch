export type Transaction = {
  id: number;
  date: Date;
  account: "Business Checking" | "Business Savings";
  description: string;
  type: "income" | "expense";
  amount: number;
};
export type Account = {
  id: number;
  name: string;
  type: "checking" | "savings";
  institution: string;
  balance: number;
};
