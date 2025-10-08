import { ResponsiveContainer } from "recharts";

function ChartContainer({
  //   id,
  //   className,
  children,
  //   config,
  ...props
}: React.ComponentProps<"div"> & {
  //   config: ChartConfig;
  children: any;
}) {
  //   const uniqueId = React.useId();
  //   const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <div
      data-slot="chart"
      // data-chart={chartId}
      className={
        "mx-auto  max-h-[250px] [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden"
      }
      //  className={cn(
      //   "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
      //   className
      // )}
      {...props}
    >
      <ResponsiveContainer>{children}</ResponsiveContainer>

      {/* <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer> */}
    </div>
  );
}

export {
  ChartContainer,
  //   ChartTooltip,
  //   ChartTooltipContent,
  //   ChartLegend,
  //   ChartLegendContent,
  //   ChartStyle,
};
