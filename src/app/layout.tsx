import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import loginBg from '../../assets/images/login-bg.svg'
import { ThemeProvider } from "@/providers/theme-provider"
import { AtomsToggleMode } from "@/components/atoms/atomsToggleMode";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobViews",
  description: "Plataforma para gerenciamento de vagas e otimização do seu tempo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex w-full bg-slate-50 dark:bg-black h-screen overflow-hidden">
            <div className="w-full hidden md:flex">
              <Image
                className="object-cover w-full h-full"
                width="720"
                height="900"
                src={loginBg}
                alt="background login image"
              />
            </div>
            <div className="w-2 hidden inter:flex bg-black dark:bg-white rounded-full h-52 absolute left-[49.8%] top-[36%]">
            </div>
            <div className="flex items-center justify-center w-full ">
              <div className="text-white absolute top-10 right-12">
                <AtomsToggleMode />
              </div>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
