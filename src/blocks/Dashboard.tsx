import { Card, CardContent, CardHeader } from "../components/Card";
import { data } from "../data/data";
import CustomBarChart from "./CustomBarChart";
// import CustomLineChart from "./CustomLineChart";
import DataTable from "./DataTable";
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";
import { type ColumnDef } from "@tanstack/react-table";
import { type Transaction } from "../types/types";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import BankAccount from "./BankAccount";
import CustomLineChart from "./CustomLineChart";

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          size="sm"
          className="-ml-3"
          h-8
          onClick={() => column.toggleSorting()}
        >
          <span>Date</span>
          {column.getIsSorted() === "desc" ? (
            <ArrowDown />
          ) : column.getIsSorted() === "asc" ? (
            <ArrowUp />
          ) : (
            <ChevronsUpDown />
          )}
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue("date") as Date;
      const formatted = date.toLocaleDateString("en-US");

      return <div>{formatted}</div>;
    },
  },
  { accessorKey: "account", header: "Account" },
  { accessorKey: "description", header: "Bank transaction" },
  // { accessorKey: "type" },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            size="sm"
            className="px-0"
            h-8
            onClick={() => column.toggleSorting()}
          >
            <span>Amount ($) </span>
            {column.getIsSorted() === "desc" ? (
              <ArrowDown />
            ) : column.getIsSorted() === "asc" ? (
              <ArrowUp />
            ) : (
              <ChevronsUpDown />
            )}
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      // const transactionType = row.original.type
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        currencySign: "accounting",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];

const totalIncome = data
  .filter((txn) => txn.type === "income")
  .reduce((sum, txn) => sum + txn.amount, 0);

const totalExpenses = data
  .filter((txn) => txn.type === "expense")
  .reduce((sum, txn) => sum + Math.abs(txn.amount), 0); // use abs() since your expenses are negative

const netProfit = totalIncome - totalExpenses;

const chartData = [
  { name: "Income", value: totalIncome },
  { name: "Expenses", value: totalExpenses },
  { name: "Net", value: netProfit },
];

function Dashboard() {
  // const [income, setIncome] = useState();
  // const [expenses, setExpenes] = useState();

  // useEffect(() => {
  //   setIncome(t);
  //   setExpenses(totalExpenses(data));
  // }, []);

  return (
    <div className="mx-auto my-8 flex max-w-7xl flex-col gap-4 px-4 md:my-20">
      {/* Stats Grid */}
      <div className="grid max-w-4xl gap-4">
        {/* Income */}
        <div className="row-start-1 row-end-3">
          <Card>
            <CardHeader>
              <div className="leading-none font-semibold tracking-tight text-[var(--card-foreground)]">
                Income
              </div>
              <div className="text-3xl font-semibold tracking-tight text-[var(--card-foreground)]">
                ${totalIncome}
              </div>
              <div className="text-sm text-[var(--muted-foreground)]">
                last 3 months
              </div>
            </CardHeader>
          </Card>
        </div>
        {/* Expense */}
        <div className="row-start-1 row-end-3">
          <Card>
            <CardHeader>
              <div className="leading-none font-semibold tracking-tight text-[var(--card-foreground)]">
                Expenses
              </div>
              <div className="text-3xl font-semibold tracking-tight text-[var(--card-foreground)]">
                ${totalExpenses}
              </div>
              <div className="text-sm text-[var(--muted-foreground)]">
                last 3 months
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Net */}
        <div className="row-start-1 row-end-3">
          <Card>
            <CardHeader>
              <div className="leading-none font-semibold tracking-tight text-[var(--card-foreground)]">
                Net
              </div>
              <div className="text-3xl font-semibold tracking-tight text-[var(--card-foreground)]">
                ${netProfit}
              </div>
              <div className="text-sm text-[var(--muted-foreground)]">
                last 3 months
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-3 gap-4">
        {/* Line Chart */}
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold tracking-tight text-[var(--card-foreground)]">
                Financial Summary
              </h3>
              <div className="text-sm text-[var(--muted-foreground)]">
                Based on all transactions
              </div>
            </CardHeader>
            <CardContent>
              <CustomLineChart />
            </CardContent>
          </Card>
        </div>

        {/* Financial Summary Chart */}
        <div className="">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold tracking-tight text-[var(--card-foreground)]">
                Financial Summary
              </h3>
              <div className="text-sm text-[var(--muted-foreground)]">
                Based on all transactions
              </div>
            </CardHeader>
            <CardContent>
              <CustomBarChart data={chartData} />
            </CardContent>
          </Card>
        </div>

        {/*  Bank Accounts Card */}
        <div className="col-start-3">
          <Card>
            <CardHeader>
              <div className="leading-none font-semibold tracking-tight text-[var(--card-foreground)]">
                Bank Accounts
              </div>
              <div className="text-sm text-[var(--muted-foreground)]">
                Overview of connected business accounts
              </div>
            </CardHeader>
            <CardContent>
              <ul>
                <BankAccount
                  name="Savings Account"
                  bank="Bank of America"
                  type="savings"
                />
                <BankAccount
                  name="Checking Account"
                  bank="Wells Fargo"
                  type="checking"
                />
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bank Transactions */}
        <div className="col-span-2 row-start-2">
          <Card>
            <CardHeader>
              <div className="text-2xl font-semibold tracking-tight text-[var(--card-foreground)]">
                Transactions
              </div>
              <div className="text-sm text-[var(--muted-foreground)]">
                Manage your payments
              </div>
            </CardHeader>

            <CardContent>
              <DataTable data={data} columns={columns} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
