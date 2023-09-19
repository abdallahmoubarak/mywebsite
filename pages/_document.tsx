import { Html, Head, Main, NextScript } from "next/document";

const APP_NAME = "Abdallah Moubarak";
const APP_DESCRIPTION = "Business & Information Systems Developer";

export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content={APP_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#191919" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
