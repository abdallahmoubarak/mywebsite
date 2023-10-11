import { links } from "@/public/data/foryou";
import Image from "next/image";
import Link from "next/link";

export default function ImportantLinks() {
  return (
    <div className="scrollbar">
      {links.map((link) => (
        <div className="link">
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
