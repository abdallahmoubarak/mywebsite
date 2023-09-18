import Button from "@/components/atom/Button";
import SectionLayout from "@/components/atom/SectionLayout";
import Image from "next/image";

export default function Hero() {
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
          <div className="md:hidden block pt-8 border-b border-blackgray">
            <Image
              alt="Abdallah Moubarak"
              src={"/img/hero.png"}
              width={991}
              height={1499}
            />
          </div>
          <div className="py-8 md:py-24 flex gap-4 max-w-xl flex-wrap">
            <Button title={"Contact Me"} />
            <Button title={"Book A Slot"} toggle={true} />
          </div>
        </div>
        <div className="flex-[1_1_40%] hidden md:block">
          <Image
            alt="Abdallah Moubarak"
            src={"/img/hero.png"}
            width={991}
            height={1499}
          />
        </div>
      </div>
    </SectionLayout>
  );
}
