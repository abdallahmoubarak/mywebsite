import About from "@/components/section/About";
import Footer from "@/components/section/Footer";
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
      </div>
      <Footer />
    </div>
  );
}
