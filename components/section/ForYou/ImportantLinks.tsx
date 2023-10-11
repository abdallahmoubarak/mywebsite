import { links } from "@/public/data/foryou";
import Image from "next/image";
import Link from "next/link";

export default function ImportantLinks() {
  return (
    <div className="scrollbar">
      {links.map((link, i) => (
        <div
          key={i}
          className="border border-primary dark:border-gray-400 rounded-xl w-72 flex h-72">
          <Link href={link.link}>
            <Image
              src={`/img/foryou/${link.img}`}
              alt=""
              width={200}
              height={200}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
