import { Landmark } from "lucide-react";

function BankAccount({
  name,
  bank,
  type,
}: {
  name: string;
  bank: string;
  type: "checking" | "savings";
}) {
  const color = type === "checking" ? "chart-1" : "chart-4";
  //   const color = "chart-3";
  return (
    <li className="flex flex-col items-start gap-3 py-4 md:flex-row">
      <span
        className={`focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-${color} inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border border-transparent p-1 text-xs font-medium whitespace-nowrap text-white transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3`}
      >
        <Landmark />
      </span>

      <div className="flex-auto">
        <p className="text-sm leading-none font-semibold text-[var(--card-foreground)]">
          {name}
        </p>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">{bank}</p>
      </div>

      <p className="text-sm font-semibold text-[var(--card-foreground)]">
        $12,396.12
      </p>
    </li>
  );
}

export default BankAccount;
