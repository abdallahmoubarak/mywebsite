import Link from "next/link";
import Menu from "./Menu";
import ModeSwitcher from "@/components/atom/ModeSwitcher";

export default function TopBar({ active }: { active: string }) {
  return (
    <div className="md:text-lg lg:text-xl px-4 lg:px-12 py-4 bg-opacity-90 sticky z-20 top-0 backdrop-blur-3xl whitespace-nowrap">
      <Menu active={active} navItems={navItems} />
      <nav className="hidden md:flex justify-between items-center overflow-auto">
        <div className="border-b-2 py-2 border-black dark:border-white md:text-xl lg:text-3xl">
          {active}
        </div>
        <ul className="flex md:gap-8 lg:gap-12">
          {navItems?.map((item, i) => (
            <Link href={item.path} key={i}>
              <li
                className={`cursor-pointer ${
                  item.name === active &&
                  "border-b-2 border-black dark:border-white"
                }`}>
                {item.name}
              </li>
            </Link>
          ))}
          <ModeSwitcher />
        </ul>
      </nav>
    </div>
  );
}

const navItems = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About Me" },
  { path: "/mywork", name: "My Work" },
  { path: "/foryou", name: "For You" },
  { path: "/estimator", name: "Estimator" },
];

export const pageTitle: any = {
  home: "Home",
  about: "About Me",
  mywork: "My Work",
  foryou: "For You",
  estimator: "Estimator",
};
