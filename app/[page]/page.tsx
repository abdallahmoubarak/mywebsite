import About from "@/components/section/About";
import Estimator from "@/components/section/Estimator";
import Footer from "@/components/section/Footer";
import ForYou from "@/components/section/ForYou";
import Mywork from "@/components/section/Mywork";
import TopBar, { pageTitle } from "@/components/section/TopBar";

export default function Page({
  params: { page },
}: {
  params: { page: string };
}) {
  return (
    <div className="bg-offwhite dark:bg-black">
      <TopBar active={pageTitle[page]} />
      <div className="min-h-screen ">
        {page === "about" && <About />}
        {page === "mywork" && <Mywork />}
        {page === "foryou" && <ForYou />}
        {page === "estimator" && <Estimator />}
      </div>
      <Footer />
    </div>
  );
}
