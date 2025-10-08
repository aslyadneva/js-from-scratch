import {
  CalendarDaysIcon,
  UserCircleIcon,
  CreditCardIcon,
} from "@heroicons/react/20/solid";

function InvoiceSummary() {
  return (
    <div className="">
      {/* className="lg:col-start-3 lg:row-end-1" */}
      <h2 className="sr-only">Summmary</h2>
      <div className="rounded-lg bg-gray-50 shadow-xs outline-1 outline-gray-900/5">
        {/* Top Section */}
        <dl className="flex flex-wrap">
          {/* Amount Section */}
          <div className="flex-auto pt-6 pl-6">
            <dt className="text-sm/6 font-semibold text-gray-900">Amount</dt>
            <dd className="mt-1 text-base font-semibold text-gray-900">
              $10,560.00
            </dd>
          </div>

          {/* Paid Status Section */}
          <div className="flex-none self-end px-6 pt-4">
            <dt className="sr-only">Status</dt>
            <dd className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-green-600/20 ring-inset">
              Paid
            </dd>
          </div>

          {/* Client Section  */}
          <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
            <dt className="flex-none">
              <span className="sr-only">Client</span>
              <UserCircleIcon
                aria-hidden="true"
                className="h-6 w-5 text-gray-400 dark:text-gray-500"
              />
            </dt>
            <dd className="text-sm/6 font-medium text-gray-900">Alex Curren</dd>
          </div>

          {/* Due Date Section */}
          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Due Date</span>
              <CalendarDaysIcon
                aria-hidden="true"
                className="h-6 w-5 text-gray-400 dark:text-gray-500"
              />
            </dt>
            <dd className="text-sm/6 text-gray-500">
              <time dateTime="2023-01-31">January 31, 2023</time>
            </dd>
          </div>

          {/* Payment Method Section */}
          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Status</span>
              <CreditCardIcon
                aria-hidden="true"
                className="h-6 w-5 text-gray-400 dark:text-gray-500"
              />
            </dt>
            <dd className="text-sm/6 text-gray-500 dark:text-gray-400">
              Paid with MasterCard
            </dd>
          </div>
        </dl>

        {/* Bottom Section */}
        <div className="mt-6 border-t border-gray-900/5 px-6 py-6 dark:border-white/10">
          <a
            href="#"
            className="text-sm/6 font-semibold text-gray-900 dark:text-white"
          >
            Download receipt <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default InvoiceSummary;
