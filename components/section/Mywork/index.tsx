"use client";
import SectionLayout from "@/components/atom/SectionLayout";
import WorkSectionHeader from "./WorkSectionHeader";
import WorkSectionCardList from "./WorkSectionCardList";
import { publications, websites, workList } from "@/public/data/work";

export default function Mywork() {
  return (
    <SectionLayout>
      <WorkSectionHeader title="I worked as:" />
      <WorkSectionCardList list={workList} />
      <WorkSectionHeader title="Websites & Apps:" />
      <WorkSectionCardList list={websites} />
      <WorkSectionHeader title="Publications & Projects:" />
      <WorkSectionCardList list={publications} />
    </SectionLayout>
  );
}
