import About from "@/components/section/About";
import Footer from "@/components/section/Footer";
import TopBar, { pageTitle } from "@/components/section/TopBar";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { page } = router.query;
  const currentPage = Array.isArray(page) ? page[0] : page || "home";

  return (
    <div>
      <TopBar active={pageTitle[currentPage]} />
      <div className="min-h-screen">{currentPage === "about" && <About />}</div>
      <Footer />
    </div>
  );
}
