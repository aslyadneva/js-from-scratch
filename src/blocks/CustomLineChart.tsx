import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
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

function CustomLineChart() {
  return (
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
  );
}

export default CustomLineChart;
