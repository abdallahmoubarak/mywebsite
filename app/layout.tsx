import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/atom/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Script from "next/script";

const nunito = Nunito({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdallah Moubarak",
  description: "Business & Information Systems Developer",
  generator: "Blue Dots",
  manifest: "/manifest.json",
  keywords: ["Abdallah", "Moubarak", "Mobarak"],
  authors: [{ name: "Abdallah Moubarak" }],
};

export const viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#191919" }],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <GoogleAnalytics gaId="G-TK28PKRRB6" />
        <Script strategy="lazyOnload" id="clarity-script">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "msrrw23ufd");`}
        </Script>
      </body>
    </html>
  );
}
