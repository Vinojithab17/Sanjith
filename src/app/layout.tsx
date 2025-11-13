import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A Next.js portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <main>{children}</main>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
