"use client";
import Button from "@/components/atom/Button";
import SectionLayout from "@/components/atom/SectionLayout";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Hero() {
  const [url, setUrl] = useState("/img/hero.png");
  const { resolvedTheme } = useTheme();
  const handleClick = () => {
    url === "/img/hero.png"
      ? setUrl("/img/hero-dark.png")
      : setUrl("/img/hero.png");
  };
  useEffect(() => {
    resolvedTheme === "dark"
      ? setUrl("/img/hero-dark.png")
      : setUrl("/img/hero.png");
  }, [resolvedTheme]);

  return (
    <SectionLayout>
      <div className="flex items-center relative">
        <div className="flex-[1_1_60%]">
          <h1 className="text-[calc(.9rem+5vw)] text-center md:text-left md:text-5xl lg:text-7xl font-bold whitespace-nowrap ">
            Abdallah Moubarak
          </h1>
          <h2 className="text-[calc(.8rem+1vw)] text-center md:text-left md:text-xl lg:text-3xl pl-1 tracking-wider">
            Business & Information Systems Developer
          </h2>
          <div className="md:hidden block pt-8 border-b border-blackgray px-4">
            <Image
              alt="Abdallah Moubarak"
              src={url}
              width={991}
              height={1499}
              onClick={handleClick}
            />
          </div>
          <div className="py-8 md:py-24 flex gap-4 max-w-xl flex-wrap">
            <Link href="tel:+96170097533">
              <Button title={"Contact Me"} />
            </Link>
            <Button title={"Book A Slot"} toggle={true} />
          </div>
        </div>
        <div className="flex-[1_1_40%] hidden md:block">
          <Image
            alt="Abdallah Moubarak"
            src={url}
            width={991}
            height={1499}
            onClick={handleClick}
          />
        </div>
      </div>
    </SectionLayout>
  );
}
