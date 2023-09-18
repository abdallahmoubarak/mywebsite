"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

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
      <div
        className="text-4xl md:hidden cursor-pointer"
        onClick={() => setOpen(true)}>
        <FiMenu />
      </div>

      <>
        <div
          className={`fixed top-0 right-0 w-screen h-screen bg-black opacity-30 z-10 ${
            open ? "block" : "hidden"
          }`}
          onClick={() => setOpen(false)}></div>
        <div
          className={`fixed  bg-white top-0 w-64 py-10 z-10 transform transition-transform duration-300 ease-in-out left-[-16rem]
          ${open && "translate-x-full"} backdrop-blur-3xl h-screen p-4 `}>
          <ul className="flex flex-col pt-4">
            {navItems.map((item: any, i: number) => (
              <Link key={i} href={item.path}>
                <li
                  key={i}
                  className={`p-1 pt-2 w-fit cursor-pointer text-black
                ${
                  active === item.name &&
                  "font-bold border-primary border-b-[1px]"
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
