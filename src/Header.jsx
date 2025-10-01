import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <nav className="bg-white h-12 sticky top-0 shadow-sm border-gray-200 border-b flex justify-end px-4">
      <div className="flex items-center gap-x-4 ">
        <button type="button" className=" text-gray-400 hover:text-gray-500">
          <span className="sr-only">View notifications</span>
          <BellIcon aria-hidden="true" className="size-5" />
        </button>

        {/* Separator */}
        <div aria-hidden="true" className="block h-6 w-px bg-gray-200 " />

        <button type="button" className=" text-gray-400 hover:text-gray-500">
          <span className="sr-only">View notifications</span>
          <Cog8ToothIcon aria-hidden="true" className="size-5" />
        </button>
      </div>
    </nav>
  );
}
