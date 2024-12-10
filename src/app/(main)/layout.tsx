import BackToTop from "@/components/main/BackToTop";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import TopFooter from "@/components/main/top-footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JobsBD - Redefine Recuitment.",
  description: "JobsBd is an online source for job opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <div className="mt-20 lg:mt-28">{children}</div>
        <TopFooter />
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
