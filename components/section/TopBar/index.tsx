import Link from "next/link";
import Menu from "./Menu";

export default function TopBar({ active }: { active: string }) {
  return (
    <div className="md:text-lg lg:text-xl px-4 lg:px-12 py-4 bg-opacity-90 sticky z-20 top-0 backdrop-blur-3xl whitespace-nowrap">
      <Menu active={active} navItems={navItems} />
      <nav className="hidden md:flex justify-between items-center overflow-auto">
        <div className="border-b-2 py-2 border-white md:text-xl lg:text-3xl">
          {active}
        </div>
        <ul className="flex md:gap-4 lg:gap-8">
          {navItems
            .filter((item) => item.name !== active)
            .map((item, i) => (
              <Link href={item.path} key={i}>
                <li className="p-4 cursor-pointer">{item.name}</li>
              </Link>
            ))}
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
  { path: "/reserve", name: "Reserve" },
];

export const pageTitle: any = {
  about: "About Me",
  mywork: "My Work",
  foryou: "For You",
  reserve: "Reserve",
};
