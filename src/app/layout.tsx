import { RootProvider } from "@/providers/root-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JobsBD",
  description: "JobsBd is an online source for job opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
