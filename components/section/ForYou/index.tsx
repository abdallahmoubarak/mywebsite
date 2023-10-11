import SectionLayout from "@/components/atom/SectionLayout";
import SectionTitle from "@/components/atom/SectionTitle";
import BookShelf from "./BookShelf";
import Library from "./Library";
import ImportantLinks from "./ImportantLinks";

export default function ForYou() {
  return (
    <SectionLayout>
      <SectionTitle>Important books for you :</SectionTitle>
      <BookShelf />
      <SectionTitle>Library for you :</SectionTitle>
      <Library />
      <SectionTitle>Links for you :</SectionTitle>
      <ImportantLinks />
    </SectionLayout>
  );
}
