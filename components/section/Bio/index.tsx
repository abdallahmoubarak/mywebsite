import SectionLayout from "@/components/atom/SectionLayout";
import SectionTitle from "@/components/atom/SectionTitle";
import Image from "next/image";

export default function Bio() {
  return (
    <SectionLayout>
      <div>
        <SectionTitle>GPT says</SectionTitle>
        <div className="flex items-center flex-wrap gap-8 md:py-4">
          <div className="flex-[1_1_18rem] md:p-4 rounded-xl md:border border-blackgray md:text-lg text-justify">
            <p>
              {" "}
              Abdallah Moubarak is a seasoned System, Business & Software
              Developer known for driving innovation and fostering business
              growth. With a strong entrepreneurial background, Abdallah has
              founded successful startups, demonstrated leadership, and
              delivered numerous scalable projects as a Full-Stack Web
              Developer. His diverse skill set includes expertise in AI,
              automation, and project management. Abdallah is committed to
              continuous learning and is currently pursuing an MBA, further
              enhancing his business acumen. His goal is to contribute to
              dynamic organizations, leveraging his extensive experience to
              drive innovation and success.
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
      </div>
      <div className="">
        <SectionTitle>About Me</SectionTitle>
        <div className="flex items-center flex-wrap gap-8 pb-4">
          <div className="flex-[1_1_18rem] p-4">
            <Image
              src={"/img/network.gif"}
              alt="AI"
              width={777}
              height={431}
              className="mx-auto rounded-2xl"
            />
          </div>
          <div className="md:py-4 flex-[1_1_18rem] md:p-4 rounded-xl md:border border-blackgray md:text-lg text-justify">
            <p>
              I am Abdallah Moubarak, a Lebanese national, deeply rooted in
              academia with a robust academic background in Biomedical
              Engineering and a Master's degree in Healthcare IT. My unwavering
              passion lies in the realm of design and innovation, where I excel
              in crafting solutions that drive meaningful impact.
            </p>
            <br />
            <p>
              My professional expertise spans programming, UI design, and web
              development, but it extends far beyond technical prowess. I am
              well-versed in project management, branding, and business
              analysis, offering a holistic approach to problem-solving.
            </p>
          </div>
        </div>
        <div className="md:py-4 flex-[1_1_18rem] md:p-4 rounded-xl md:border border-blackgray md:text-lg text-justify">
          <p>
            I am resolutely committed to continuous growth, currently pursuing
            an MBA to further refine my business acumen. My ultimate aspiration
            is to leverage my extensive skill set and experience to catalyze
            innovation within dynamic organizations. My ability to navigate
            complex challenges and drive results, coupled with my knack for
            creative thinking, positions me as a catalyst for business success.
          </p>
          <br />
          <p>
            Collaborating with me means accessing a reservoir of innovative
            ideas and a strong commitment to results. By combining my technical
            expertise with my strategic vision, I'm dedicated to bringing
            businesses to new heights of success. I invite you to reach out to
            me on social media or WhatsApp to explore how we can embark on
            transformative projects and chart a course to prosperity. Together,
            we can turn your vision into reality and propel your business
            towards unprecedented success.
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}
