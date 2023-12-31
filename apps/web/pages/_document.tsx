import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html suppressHydrationWarning className="h-full scroll-smooth bg-gray-100 font-normal antialiased" lang="en">
      <Head>
        <meta name="color-scheme"></meta>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo_h.jpeg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo_h.jpeg" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
