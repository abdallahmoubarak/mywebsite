import { social } from "@/public/data/social";
import Image from "next/image";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="flex gap-4 justify-center items-center flex-wrap p-4">
      {social.map((item: any, i) => (
        <Link href={item.link}>
          <Image
            key={i}
            src={`/svg/${item.img}.svg`}
            width={item.width}
            height={20}
            alt="abdallah mobarak"
            className="cursor-pointer"
          />
        </Link>
      ))}
    </div>
  );
}
