import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <Head></Head>
      <main className="lg:py-0 2xl:px-0 lg:px-10  px-0 bg-white dark:bg-[#151515]">{children}</main>
    </>
  );
}
