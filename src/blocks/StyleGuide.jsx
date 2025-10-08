import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";
import CustomTable from "./CustomTable";
import { Card, CardHeader } from "../components/Card";
import { ChartContainer } from "../components/Chart";

const data = [
  { period: "Jan", expenses: 3200, income: 5400, net: 2200 },
  { period: "Feb", expenses: 2900, income: 5100, net: 2200 },
  { period: "Mar", expenses: 3100, income: 5600, net: 2500 },
  { period: "Apr", expenses: 3500, income: 5800, net: 2300 },
  { period: "May", expenses: 3700, income: 6200, net: 2500 },
  { period: "Jun", expenses: 4000, income: 6400, net: 2400 },
  { period: "Jul", expenses: 4200, income: 6800, net: 2600 },
  { period: "Aug", expenses: 3900, income: 7000, net: 3100 },
];

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
                <ChartContainer>
                  <BarChart
                    // width={400}
                    // height={300}
                    // accessibilityLayer
                    data={chartData}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <YAxis
                      // dataKey="month"
                      // type="category"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      orientation="right"
                      tickFormatter={(value) => `${value}k`}
                    />
                    {/* <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} /> */}
                    <Bar dataKey="desktop" fill="var(--primary)" radius={4} />
                    <Bar dataKey="mobile" fill="var(--chart-2)" radius={4} />
                  </BarChart>
                </ChartContainer>
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
                <ChartContainer>
                  <LineChart
                    // width={400}
                    // height={300}
                    data={data}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="period"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      interval={2}
                      // tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <YAxis
                      // dataKey="month"
                      // type="category"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      orientation="right"
                      tickFormatter={(value) => `${value}k`}
                    />
                    {/* <XAxis
                  dataKey="period"
                 
                /> */}
                    <Line
                      type="monotone"
                      dataKey="income"
                      stroke="var(--primary)"
                      strokeWidth={2}
                      dot={{
                        fill: "var(--primary)",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="expenses"
                      stroke="var(--chart-2)"
                      strokeWidth={2}
                      dot={{
                        fill: "var(--chart-2)",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="net"
                      stroke="var(--chart-3)"
                      strokeWidth={2}
                      dot={{
                        fill: "var(--chart-3)",
                      }}
                    />
                  </LineChart>
                </ChartContainer>
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
