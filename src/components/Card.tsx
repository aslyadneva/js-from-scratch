function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className="bg-[var(--card)] border border-[var(--border)] rounded-xl "
      //   className={cn(
      //     "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      //     className
      //   )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className="p-6 flex flex-col space-y-1.5"
      // className={cn(
      //   "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
      //   className
      // )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  //   CardFooter,
  //   CardTitle,
  //   CardAction,
  //   CardDescription,
  //   CardContent,
};
