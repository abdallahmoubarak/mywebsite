import About from "@/components/section/About";
import Footer from "@/components/section/Footer";
import TopBar, { pageTitle } from "@/components/section/TopBar";

export default function Page({ params }: { params: { page: string } }) {
  return (
    <div>
      <TopBar active={pageTitle[params.page]} />
      <div className="min-h-screen">{params.page === "about" && <About />}</div>
      <Footer />
    </div>
  );
}
