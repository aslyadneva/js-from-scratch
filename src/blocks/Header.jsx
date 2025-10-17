import { useEffect, useState } from "react";

const navItems = [
  { title: "Dashboard", isActive: true },
  { title: "Sales" },
  { title: "Purchases" },
  { title: "Banking" },
  { title: "Reporting" },
];

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme == "light" && document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
    }
    if (theme == "dark") {
      document.body.classList.add(theme);
    }
  }, [theme]);

  return (
    <nav className="flex h-16 justify-between bg-[var(--sidebar)] shadow-xs">
      <div className="ml-6 hidden sm:flex sm:space-x-8">
        {navItems.map((item) => (
          <a
            key={item.title}
            className={`nav-item ${item.isActive ? "border-[var(--primary)] text-[var(--foreground)]" : ""}`}
          >
            {item.title}
          </a>
        ))}
      </div>

      <div className="group relative mr-6 ml-2 inline-flex w-11 shrink-0 self-center rounded-full bg-[var(--input)] p-0.5 inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-[var(--primary)] has-focus-visible:outline-2">
        <span className="size-5 rounded-full bg-[var(--background)] shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-5" />
        <input
          name="setting"
          type="checkbox"
          checked={theme == "light" ? false : true}
          aria-label="Use setting"
          className="absolute inset-0 appearance-none focus:outline-hidden"
          onChange={(e) => setTheme(theme == "light" ? "dark" : "light")}
        />
      </div>
    </nav>
  );
}
