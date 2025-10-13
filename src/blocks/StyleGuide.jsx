import { Landmark } from "lucide-react";
import CustomTable from "./CustomTable";
import CustomLineChart from "./CustomLineChart";
import CustomBarChart from "./CustomBarChart";
import { Card, CardContent, CardHeader } from "../components/Card";
import { ChartContainer } from "../components/Chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export default function StyleGuide() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="text-3xl font-semibold tracking-tight text-[var(--card-foreground)]">
          Card Stat - $15,231.80
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-[var(--card-foreground)]">
          Heading 1 - Card Header
        </h1>
        <h2 className="text-xl font-semibold tracking-tight text-[var(--card-foreground)]">
          Heading 2 - Card Header Smaller
        </h2>
        <h3 className="text-lg font-semibold tracking-tight text-[var(--card-foreground)]">
          Heading 3 - Card Header even smaller
        </h3>
        <h4 className="leading-none font-semibold tracking-tight text-[var(--card-foreground)]">
          Heading 4 - Card Title
        </h4>
        <div className="text-[var(--muted-foreground)] @3xl:text-xl">
          Check out our affordable pricing plans
        </div>
        {/* <div className="text-3xl text-[var(--muted-foreground)]">
          Check out our affordable pricing plans
        </div> */}

        <p className="text-sm text-[var(--muted-foreground)]">
          Card subheading information text.
        </p>
        <p className="text-sm font-semibold text-[var(--muted-foreground)]">
          Card subheading information text bold
        </p>
        <p className="text-sm text-[var(--card-foreground)]">Normal text.</p>
        <p className="text-sm font-medium text-[var(--card-foreground)]">
          Normal text medium
        </p>
        <p className="text-sm font-semibold text-[var(--card-foreground)]">
          Normal text bold
        </p>
        <p className="text-sm text-[var(--secondary-foreground)]">
          Normal text secondary foreground
        </p>
        <p className="text-sm font-semibold text-[var(--secondary-foreground)]">
          Normal text secondary foreground bold
        </p>

        <div className="flex gap-3">
          <div className="min-w-20 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2">
            Background
          </div>

          <div className="min-w-20 rounded-md border border-[var(--border)] bg-[var(--card)] px-3 py-2">
            Card Background
          </div>

          <div className="min-w-20 rounded-md border border-[var(--border)] bg-[var(--sidebar)] px-3 py-2">
            <p className="text-sm font-semibold text-[var(--muted-foreground)]">
              Card subheading information text bold - Sidebar Background
            </p>
          </div>
        </div>

        <button className="flex h-9 items-center rounded-md bg-[var(--primary)] px-3 py-3 text-sm font-medium text-[var(--primary-foreground)]">
          Button Primary
        </button>
        <button className="flex h-9 items-center rounded-md bg-[var(--secondary)] px-3 py-3 text-sm font-medium text-[var(--secondary-foreground)]">
          Button Secondary
        </button>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {/* Income Chart  */}

          <div className="">
            <Card>
              <CardHeader>
                <div className="leading-none font-semibold tracking-tight text-[var(--card-foreground)]">
                  Income
                </div>
                <div className="text-3xl font-semibold tracking-tight text-[var(--card-foreground)]">
                  $15,930.31
                </div>
                <div className="text-sm text-[var(--muted-foreground)]">
                  last 3 months
                </div>
              </CardHeader>
              <div className="px-6 pb-6">
                <CustomBarChart data={chartData} />
              </div>
            </Card>
          </div>

          {/* Expenses Chart  */}

          {/* Financial Position Chart  */}

          <div className="">
            <Card>
              <CardHeader>
                <div className="leading-none font-semibold tracking-tight text-[var(--card-foreground)]">
                  Financial Position
                </div>
                <div className="text-3xl font-semibold tracking-tight text-[var(--card-foreground)]">
                  $30,050.43
                </div>
                <div className="text-sm text-[var(--muted-foreground)]">
                  This financial year
                </div>
              </CardHeader>

              <div className="px-6 pb-6">
                <CustomLineChart />
              </div>
            </Card>
          </div>

          <div className="">
            <Card>
              <CardHeader>
                <div className="text-sm text-[var(--muted-foreground)]">
                  Total Revenue
                </div>
                <div className="text-3xl font-semibold tracking-tight text-[var(--card-foreground)]">
                  $15,231.80
                </div>
              </CardHeader>
              <CardContent>
                <ul className="">
                  <li className="flex items-start gap-3 py-4">
                    <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-chart-1 inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border border-transparent p-1 text-xs font-medium whitespace-nowrap text-white transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                      <Landmark
                      // size={18}
                      // color="red"
                      />
                    </span>

                    <div className="flex-auto">
                      <p className="text-sm font-semibold text-[var(--card-foreground)]">
                        Savings Account
                      </p>
                      <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                        Bank of America
                      </p>
                    </div>

                    <p className="text-sm font-semibold text-[var(--card-foreground)]">
                      $12,396.12
                    </p>
                  </li>

                  <li className="flex items-start gap-3 py-4">
                    <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-chart-4 inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent p-1 text-xs font-medium whitespace-nowrap text-white transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                      <Landmark
                      // size={18}
                      // color="red"
                      />
                    </span>

                    <div className="flex-auto">
                      <p className="text-sm font-semibold text-[var(--card-foreground)]">
                        Checking Account
                      </p>
                      <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                        Bank of America
                      </p>
                    </div>

                    <p className="text-sm font-semibold text-[var(--card-foreground)]">
                      $12,396.12
                    </p>
                  </li>
                  <li className="flex items-start gap-3 py-4">
                    <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-chart-5 inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent p-1 text-xs font-medium whitespace-nowrap text-white transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                      <Landmark
                      // size={18}
                      // color="red"
                      />
                    </span>

                    <div className="flex-auto">
                      <p className="text-sm font-semibold text-[var(--card-foreground)]">
                        Billing Account
                      </p>
                      <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                        Chase
                      </p>
                    </div>

                    <p className="text-sm font-semibold text-[var(--card-foreground)]">
                      $12,396.12
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="text-2xl font-semibold tracking-tight text-[var(--card-foreground)]">
              Card Header
            </div>
            <div className="text-sm text-[var(--muted-foreground)]">
              Manage your payments
            </div>
          </CardHeader>

          <div className="p-6 pt-0">
            <CustomTable />
          </div>
        </Card>
      </div>
    </>
  );
}
