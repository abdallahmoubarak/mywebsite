import About from "@/components/section/About";
import Estimator from "@/components/section/Estimator";
import Footer from "@/components/section/Footer";
import ForYou from "@/components/section/ForYou";
import Mywork from "@/components/section/Mywork";
import TopBar, { pageTitle } from "@/components/section/TopBar";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { page } = router.query;
  const currentPage = Array.isArray(page) ? page[0] : page || "home";

  return (
    <div className="bg-offwhite dark:bg-black">
      <TopBar active={pageTitle[currentPage]} />
      <div className="min-h-screen ">
        {currentPage === "about" && <About />}
        {currentPage === "mywork" && <Mywork />}
        {currentPage === "foryou" && <ForYou />}
        {currentPage === "estimator" && <Estimator />}
      </div>
      <Footer />
    </div>
  );
}
