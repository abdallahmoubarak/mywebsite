"use client";
import Link from "next/link";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";

export default function SaveContact() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <Link
      className={`${isVisible ? "opacity-100" : "opacity-0"}`}
      href={isVisible ? "/data/AbdallahMoubarak.vcf" : "#"}>
      <div
        onClick={() => setIsVisible(false)}
        className={`fixed flex justify-center gap-4 w-full bottom-0 py-2 bg-sky-600 text-white
          ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <FaDownload />
        <span>Save Contact</span>
      </div>
    </Link>
  );
}
