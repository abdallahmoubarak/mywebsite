import Bio from "@/components/section/Bio";
import Brands from "@/components/section/Brands";
import Hero from "@/components/section/Hero";
import Promote from "@/components/section/Hero/Promote";
import TopBar from "@/components/section/TopBar";
import SaveContact from "../atom/SaveContact";

export default function Home() {
  return (
    <div>
      <TopBar active={"Home"} />
      <Hero />
      <SaveContact />
      <Promote />
      <Bio />
      <Brands />
    </div>
  );
}
