import Image from "next/image";
import SectionLayout from "./SectionLayout";
import SectionTitle from "./SectionTitle";

interface TheLineProps {
  title: string;
  text: string;
  folder: string;
  number: number;
}

export default function TheLine({ title, text, folder, number }: TheLineProps) {
  return (
    <SectionLayout>
      <SectionTitle>{title}</SectionTitle>

      <div className="overflow-x-scroll flex p-4 gap-6 border-b border-gray-200">
        {Array.from(Array(number).keys()).map((n, i) => (
          <div
            key={i}
            className="rounded-full bg-white flex items-center justify-center h-32 min-h-[8rem] w-32 min-w-[8rem]">
            <Image
              src={`/img/${folder}/${n}.png`}
              alt=""
              className="p-2 overflow-hidden"
              width={200}
              height={200}
            />
          </div>
        ))}
        <div className="text p-4 w-56 text-center ">{text}</div>
      </div>
    </SectionLayout>
  );
}
