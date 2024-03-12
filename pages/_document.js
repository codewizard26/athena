import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-black bg-opacity-80 bg-[url('/bg.png')] h-screen w-screen bg-cover bg-no-repeat bg-center">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
