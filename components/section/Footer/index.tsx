import SectionLayout from "@/components/atom/SectionLayout";
import SocialMedia from "./SocialMedia";
import SectionTitle from "@/components/atom/SectionTitle";
import Link from "next/link";
import { MdOutlineMailOutline, MdPhoneIphone } from "react-icons/md";

export default function Footer() {
  return (
    <div className="border-t border-blackgray ">
      <SectionLayout>
        <SectionTitle>Contact Info</SectionTitle>
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
            </span>{" "}
            abdallah.moubarak92@gmail.com
          </div>
        </div>

        <div>
          <SocialMedia />
        </div>
        <div className="text-center">© All Rights Reserved since 2015</div>
      </SectionLayout>
    </div>
  );
}
