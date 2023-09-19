"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import ModeSwitcher from "@/components/atom/ModeSwitcher";

export default function Menu({
  navItems,
  active,
}: {
  navItems: any;
  active: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" md:hidden cursor-pointer flex justify-between">
        <div className="text-4xl" onClick={() => setOpen(true)}>
          <FiMenu />
        </div>
        <ModeSwitcher />
      </div>

      <>
        <div
          className={`fixed top-0 right-0 w-screen h-screen bg-black opacity-50 z-10 ${
            open ? "block" : "hidden"
          }`}
          onClick={() => setOpen(false)}></div>
        <div
          className={`fixed bg-offwhite dark:bg-black bg-opacity-95 h-screen p-4 top-0 w-64 py-10 z-10 transform transition-transform duration-300 ease-in-out left-[-16rem]
          ${open && "translate-x-full"} `}>
          <ul className="flex flex-col pt-4">
            {navItems.map((item: any, i: number) => (
              <Link key={i} href={item.path}>
                <li
                  key={i}
                  onClick={() => setOpen(false)}
                  className={`p-1 pt-2 w-fit cursor-pointer 
                ${
                  active === item.name &&
                  "font-bold border-black dark:border-white border-b"
                }
                `}>
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </>
    </>
  );
}
