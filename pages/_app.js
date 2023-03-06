import Layout from "@/components/layout";
import "@/styles/globals.css";
import "@/styles/carousal.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import Header3 from "@/components/header3";
import Footer2 from "@/components/footer2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import ThemButton from "@/components/home/themButton1";
import { useRouter } from "next/router";
import CursorPointer from "@/components/cursor-pointer";
export default function MyApp({ Component, pageProps, session }) {
  const router = useRouter();
  const hideFooter =
    router.pathname === "/portfolio" ||
    router.pathname === "/backstory" ||
    router.pathname === "/";

  return (
    <>
      <ThemeProvider attribute="class" themes={["light", "dark"]}>
        <CursorPointer />
        <Layout>
          <ThemButton />
          <Header3 />
          <Component {...pageProps} />
        </Layout>
        {!hideFooter && <Footer2 />}
      </ThemeProvider>
    </>
  );
}
