function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className="bg-card h-[100%] rounded-xl border border-[var(--border)]"
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className="flex flex-col space-y-1.5 p-6"
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className="p-6 pt-0" {...props} />;
}

export {
  Card,
  CardHeader,
  //   CardFooter,
  //   CardTitle,
  //   CardAction,
  //   CardDescription,
  CardContent,
};
