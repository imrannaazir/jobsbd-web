import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
