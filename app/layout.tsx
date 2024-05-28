import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import ToggleThemeButton from "@/components/ui/buttons/ToggleThemeButton";
import Sidebar from "@/components/ui/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keeptrack",
  description: "Track your projects, learn new skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="w-full flex justify-center">
            <Navbar />
          </div>
          <div className="absolute right-4 top-8 flex flex-col md:flex-row justify-start gap-4">
            <Sidebar />
            <ToggleThemeButton />
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
