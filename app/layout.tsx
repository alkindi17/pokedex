import type { Metadata } from "next";
import { Inter, Luckiest_Guy, Space_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const luckiest_guy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-luckiest-guy",
});
const roboto_mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Pokédex",
  description: "A pokedex app, displaying all pokemons and their details",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${luckiest_guy.variable} ${roboto_mono.variable} bg-[#f5f5f5]`}
    >
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
