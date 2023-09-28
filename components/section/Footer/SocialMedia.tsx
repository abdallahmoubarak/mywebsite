import { social } from "@/public/data/social";
import Image from "next/image";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="flex border py-4 px-2 border-blackgray justify-center gap-4 items-center flex-wrap p-4 rounded-xl bg-black dark:bg-none">
      {social.map((item: any, i) => (
        <Link key={i} href={item.link}>
          <div className={`cursor-pointer`}>
            <Image
              src={`/svg/${item.img}.svg`}
              width={20}
              height={20}
              alt="abdallah mobarak"
              className="h-auto w-auto"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
