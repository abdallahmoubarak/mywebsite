import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFilePdf, FaGlobeAmericas } from "react-icons/fa";

export default function WorkSectionCard({ work }: { work: any }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={` border rounded-lg shadow-md cursor-pointer  ${
          open && "md:col-span-2"
        }`}>
        <div onClick={() => setOpen(!open)} className="px-10 py-4">
          <div className="w-40 h-40 mx-auto flex items-center justify-center rounded-full border border-gray-300 bg-white">
            <Image
              src={`/img/mywork/${work.img}.png`}
              alt={work.img}
              className="w-40 rounded-full"
              width={200}
              height={200}
            />
          </div>
          <div className="pt-4 text-center text-xl">{work.title}</div>
        </div>
        {open && (
          <div className="px-10 py-4">
            <div className="text-justify">
              {work.body}
              <div>
                {work.list &&
                  work.list.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                {work?.dImg && (
                  <div className="w-auto max-w-full mx-auto">
                    <Image
                      src={`/img/mywork/${work.dImg}.png`}
                      alt={work.dImg}
                      className="max-w-full"
                      width={800}
                      height={1500}
                    />
                  </div>
                )}
              </div>
            </div>
            {work.link && (
              <Link href={work.link}>
                <div className="flex items-center gap-4">
                  <span className="py-4">
                    {work.icon === "web" && <FaGlobeAmericas />}
                    {work.icon === "pdf" && <FaFilePdf />}
                  </span>
                  <span className="p-0.2">{work.linkText}</span>
                </div>
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
}
