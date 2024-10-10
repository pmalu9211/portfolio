import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provide";
import { FloatingNavDemo } from "@/components/functional/floating-navbar-demo";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prathamesh's Portfolio",
  description: "A small showcase of my projects",
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNavDemo />
          {children}
          <Toaster
            richColors
            toastOptions={{
              classNames: {
                title: "text-lg",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
