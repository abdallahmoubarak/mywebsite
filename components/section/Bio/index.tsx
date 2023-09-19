import SectionLayout from "@/components/atom/SectionLayout";
import SectionTitle from "@/components/atom/SectionTitle";
import Image from "next/image";

export default function Bio() {
  return (
    <SectionLayout>
      <SectionTitle>GPT says</SectionTitle>
      <div className="flex items-center flex-wrap-reverse gap-8 md:py-4">
        <div className="flex-[1_1_18rem] md:p-4 rounded-xl md:border border-blackgray md:text-lg text-justify">
          <p>
            {
              "Abdallah Moubarak is a seasoned System, Business & Software Developer known for driving innovation and fostering business growth. With a strong entrepreneurial background, Abdallah has founded successful startups, demonstrated leadership, and delivered numerous scalable projects as a Full-Stack Web Developer. His diverse skill set includes expertise in AI, automation, and project management. Abdallah is committed to continuous learning and is currently pursuing an MBA, further enhancing his business acumen. His goal is to contribute to dynamic organizations, leveraging his extensive experience to drive innovation and success."
            }
          </p>
        </div>
        <div className="flex-[1_1_18rem]">
          <Image
            src={"/img/hands.png"}
            alt="AI"
            width={777}
            height={431}
            className="mx-auto "
          />
        </div>
      </div>
    </SectionLayout>
  );
}
