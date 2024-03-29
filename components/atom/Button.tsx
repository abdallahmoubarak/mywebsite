"use client";
import { ButtonProps } from "@/types/Button.type";

export default function Button({
  onClick,
  toggle,
  title,
  icon,
  isFull,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex  rtl:flex-row-reverse items-center justify-center gap-4 flex-auto max-h-12 h-12 py-2 px-4 rounded-full border text-base dark:border-white border-black ${
        toggle ? "bg-white text-black" : "bg-black text-white"
      } font-bold cursor-pointer min-w-[9rem] lg:min-w-[12rem]   
      ${isFull && "w-full"}
       whitespace-nowrap hover:bg-gray-600 hover:text-white
       ${className}`}>
      {icon && <span>{icon}</span>}
      <span>{title}</span>
    </button>
  );
}
