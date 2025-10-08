function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className="w-full caption-bottom text-sm "
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return <thead data-slot="table-header" {...props} />;
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b border-[var(--border)] transition-colors "
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      scope="col"
      className="px-3 py-3.5 text-left text-sm font-semibold text-[var(--card-foreground)]"
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className="[&_tr:last-child]:border-0"
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className="px-3 py-4 text-sm whitespace-nowrap text-[var(--card-foreground)]"
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  //   TableFooter,
  TableHead,
  TableRow,
  TableCell,
  //   TableCaption,
};
