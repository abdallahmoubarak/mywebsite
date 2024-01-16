import SectionLayout from "@/components/atom/SectionLayout";
import SectionTitle from "@/components/atom/SectionTitle";
import { brandsList } from "@/public/data/brandList";
import Image from "next/image";
import Link from "next/link";

export default function Brands() {
  return (
    <div className="border-y border-gray-200">
      <SectionLayout>
        <SectionTitle>Brands</SectionTitle>
        <div className="flex overflow-auto items-center gap-6 p-4">
          {brandsList.map((brand, i) => (
            <Link key={i} href={brand.url} className="block">
              <Image
                src={`/img/mybrands/${brand.img}.png`}
                alt={brand.name}
                height={340}
                width={340}
                className="w-32 h-32 min-w-[8rem] min-h-[8rem] bg-white rounded-full p-1 border border-zinc-400"
              />
            </Link>
          ))}
        </div>
      </SectionLayout>
      <div className="dark:bg-blackgray bg-slate-200  text-xl  text-center p-2 border-t border-gray-200">
        Every brand means a life of experiance..
      </div>
    </div>
  );
}
