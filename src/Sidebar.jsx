import {
  HomeIcon,
  CurrencyDollarIcon,
  ScaleIcon,
  ChartPieIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const sidebarNavItems = [
  { name: "Dashboard", icon: HomeIcon },
  { name: "Create", icon: PlusCircleIcon },
  { name: "Sales", icon: CurrencyDollarIcon },
  // {name: "Purchases"},
  //  {name: "Banking"},
  { name: "Accounting", icon: ScaleIcon },
  { name: "Reporting", icon: ChartPieIcon },
];

function Sidebar() {
  return (
    <div
      className=" flex w-64 flex-col border-gray-200 border-r bg-white px-6 gap-y-5"
      // "relative flex grow flex-col  overflow-y-auto "
    >
      {/* // Image */}
      <div className="relative flex h-16 shrink-0 items-center">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="h-8 w-auto"
        />
      </div>

      {/* // Nav */}
      <nav className="relative flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          {/* List item that contains another list of items  */}
          <li>
            {/* List of top items */}
            <ul role="list" className="-mx-2 space-y-1">
              {sidebarNavItems.map((item) => (
                <li key={item.name}>
                  <a
                    // href={item.href}
                    className={classNames(
                      "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                      "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                    )}
                  >
                    {/* {item.icon} */}
                    <item.icon
                      aria-hidden="true"
                      className={classNames(
                        "text-gray-400 group-hover:text-indigo-600",
                        "size-6 shrink-0"
                      )}
                    />

                    {item.name}
                    {/* {item.count ? (
                      <span
                        aria-hidden="true"
                        className="ml-auto w-9 min-w-max rounded-full bg-white px-2.5 py-0.5 text-center text-xs/5 font-medium whitespace-nowrap text-gray-600 outline-1 -outline-offset-1 outline-gray-200"
                      >
                        {item.count}
                      </span>
                    ) : null} */}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          {/* <li>
            <div className="text-xs/6 font-semibold text-gray-400">
              Your teams
            </div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
              {teams.map((team) => (
                <li key={team.name}>
                  <a
                    href={team.href}
                    className={classNames(
                      team.current
                        ? "bg-gray-50 text-indigo-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                      "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                    )}
                  >
                    <span
                      className={classNames(
                        team.current
                          ? "border-indigo-600 text-indigo-600"
                          : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
                        "flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"
                      )}
                    >
                      {team.initial}
                    </span>
                    <span className="truncate">{team.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </li> */}

          {/* Bottom item */}
          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50"
            >
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-8 rounded-full bg-gray-50 outline -outline-offset-1 outline-black/5"
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
