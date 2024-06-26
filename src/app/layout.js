import { Didact_Gothic, Inter } from "next/font/google";
import "./globals.css";
const didact = Didact_Gothic({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={didact.className}>{children}</body>
    </html>
  );
}
