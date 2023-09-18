import SectionLayout from "@/components/atom/SectionLayout";
import SectionTitle from "@/components/atom/SectionTitle";
import { brandsList } from "@/public/data/brandList";
import Image from "next/image";
import Link from "next/link";

export default function Brands() {
  return (
    <div className="border-y border-blackgray">
      <SectionLayout>
        <SectionTitle>Brands</SectionTitle>
        <div className="flex overflow-auto items-center gap-6 p-4 bg-slate-100 rounded-xl">
          {brandsList.map((brand, i) => (
            <Link key={i} href={brand.url} className="block">
              <Image
                src={`/img/${brand.img}.png`}
                alt={brand.name}
                height={340}
                width={340}
                className={`w-32 h-32 min-w-[8rem] min-h-[8rem]`}
              />
            </Link>
          ))}
          <div>Every brand means a life of experiance..</div>
        </div>
      </SectionLayout>
    </div>
  );
}
