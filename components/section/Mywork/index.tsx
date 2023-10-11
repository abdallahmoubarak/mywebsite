import SectionLayout from "@/components/atom/SectionLayout";
import WorkSectionHeader from "./WorkSectionHeader";
import WorkSectionCardList from "./WorkSectionCardList";

export default function Mywork() {
  return (
    <SectionLayout>
      <WorkSectionHeader title="I worked as:" />
      <WorkSectionCardList list={work} />
      <WorkSectionHeader title="Websites & Apps:" />
      <WorkSectionHeader title="Publications & Projects:" />
    </SectionLayout>
  );
}

const work = [
  {
    title: "Instructor",
    description:
      "I teached many materials for all of the study stages, such as physics, math, arabic, programing, and english. I always think about new ways to teach effectively.",
  },
];
