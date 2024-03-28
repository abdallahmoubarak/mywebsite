import Bio from "@/components/section/Bio";
import Brands from "@/components/section/Brands";
import Hero from "@/components/section/Hero";
import Promote from "@/components/section/Hero/Promote";
import TopBar from "@/components/section/TopBar";
import Button from "../atom/Button";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <TopBar active={"Home"} />
      <Hero />
      <Link href={"/data/AbdallahMoubarak.vcf"}>
        <div
          className={
            "fixed flex justify-center gap-4 w-full bottom-0 py-3 bg-sky-600 text-white"
          }>
          <FaDownload />
          <span>Save Contact</span>
        </div>
      </Link>
      <Promote />
      <Bio />
      <Brands />
    </div>
  );
}
