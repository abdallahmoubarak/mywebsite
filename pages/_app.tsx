import Providers from "@/components/atom/Providers";
import "@/public/globals.css";
import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
});

export default function APP({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component className={nunito.className} {...pageProps} />
      <style jsx global>{`
        html {
          font-family: ${nunito.style.fontFamily};
        }
      `}</style>
    </Providers>
  );
}
