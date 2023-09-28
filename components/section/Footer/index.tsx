import SectionLayout from "@/components/atom/SectionLayout";
import SocialMedia from "./SocialMedia";
import SectionTitle from "@/components/atom/SectionTitle";
import Link from "next/link";
import { MdOutlineMailOutline, MdPhoneIphone } from "react-icons/md";
import Logo from "@/public/svg/logo";

export default function Footer() {
  return (
    <>
      <SectionLayout>
        <div className="flex flex-wrap gap-y-4 gap-x-12 justify-center md:justify-start">
          <div className="w-40 h-40 dark:hidden">
            <Logo />
          </div>
          <div className="w-40 h-40 hidden dark:block">
            <Logo isBlack={true} />
          </div>
          <div>
            <div className="flex flex-col gap-2 py-2">
              <div className="border py-4 px-2 border-blackgray rounded-lg">
                <Link href={"tel:+96170097533"}>
                  <div className="flex gap-2 items-center">
                    <span>
                      <MdPhoneIphone />
                    </span>{" "}
                    +961 7009 7533
                  </div>
                </Link>
                <div className="flex gap-2 items-center">
                  <span>
                    <MdOutlineMailOutline />
                  </span>
                  abdallah.moubarak92@gmail.com
                </div>
              </div>
              <SocialMedia />
            </div>
          </div>
        </div>
      </SectionLayout>
      <div className="dark:bg-blackgray bg-slate-200  text-base  text-center p-1">
        © All Rights Reserved since 2015
      </div>
    </>
  );
}
