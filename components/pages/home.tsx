import Bio from "@/components/section/Bio";
import Brands from "@/components/section/Brands";
import Portfolios from "@/components/section/Portfolios";
import Hero from "@/components/section/Hero";
import Promote from "@/components/section/Hero/Promote";
import TopBar from "@/components/section/TopBar";

export default function Home() {
  return (
    <div>
      <TopBar active={"Home"} />
      <Hero />
      <Promote />
      <Portfolios />
      <Bio />
      <Brands />
    </div>
  );
}
