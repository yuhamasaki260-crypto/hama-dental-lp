import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "はま歯科 | 地域に寄り添うやさしい歯科医院",
  description:
    "はま歯科は、予防歯科から小児歯科、審美治療まで幅広く対応する地域密着の歯科医院です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
