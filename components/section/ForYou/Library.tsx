import { libraryCategory, libraryList } from "@/public/data/foryou";
import { useState } from "react";
import { FaBook, FaPaperclip } from "react-icons/fa";
import Link from "next/link";

export default function Library() {
  return (
    <div className="border rounded-md">
      {libraryCategory.map((category, i) => (
        <File key={i} category={category} />
      ))}
    </div>
  );
}

export function File({ category }: { category: any }) {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <div
        className="flex border-b border-primary dark:border-gray-400 py-2 px-6  text-xl cursor-pointer"
        onClick={() => setHidden(!hidden)}>
        <span className="icon mr-2">
          <FaBook />
        </span>
        {category}
      </div>

      {!hidden && (
        <div>
          {libraryList
            .filter((file) => file.category === category)
            .map((file, i) => (
              <Link key={i} href={file.link}>
                <div className="flex items-center border-b border-primary dark:border-gray-400 py-2 px-6 text-indigo-800 dark:text-indigo-200 text-base">
                  <span className="icon mr-2">
                    <FaPaperclip />
                  </span>
                  {file.Title}
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}
