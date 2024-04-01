import Bio from "@/components/section/Bio";
import Brands from "@/components/section/Brands";
import Hero from "@/components/section/Hero";
import Promote from "@/components/section/Hero/Promote";
import TopBar from "@/components/section/TopBar";
import SaveContact from "@/components/atom/SaveContact";
import Footer from "@/components/section/Footer";

export default async function Home() {
  return (
    <div className="bg-offwhite dark:bg-black">
      <TopBar active={"Home"} />
      <Hero />
      <SaveContact />
      <Promote />
      <Bio />
      <Brands />
      <Footer />
    </div>
  );
}
