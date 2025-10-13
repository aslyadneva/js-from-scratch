import { CartesianGrid, Bar, BarChart, XAxis, YAxis, Cell } from "recharts";
import { ChartContainer } from "../components/Chart";
// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ];

const COLORS = ["var(--primary)", "var(--chart-2)", "var(--chart-3)"];

function CustomBarChart({ data }: any) {
  return (
    <ChartContainer>
      <BarChart
        // width={400}
        // height={300}
        // accessibilityLayer
        data={data}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          // tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          dataKey="value"
          // type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          orientation="right"
          tickFormatter={(value) => `$${value}`}
        />
        {/* <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} /> */}
        {/* <Bar dataKey="value" fill="var(--primary)" radius={4} /> */}
        {/* <Bar dataKey="mobile" fill="var(--chart-2)" radius={4} /> */}

        <Bar dataKey="value" radius={4}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

export default CustomBarChart;
