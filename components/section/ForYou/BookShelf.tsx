import { books } from "@/public/data/foryou";
import Image from "next/image";
import Link from "next/link";

export default function BookShelf() {
  return (
    <div className="w-full overflow-x-scroll flex p-2 gap-4">
      {books.map((book, i) => (
        <div
          key={i}
          className="border rounded-3xl w-48 flex h-64 overflow-hidden ">
          <Link href={book.link}>
            <Image
              src={`/img/foryou/${book.img}`}
              alt=""
              className=""
              width={200}
              height={500}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
