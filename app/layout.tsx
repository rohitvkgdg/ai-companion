import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./(marketing)/_components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

const font = Inter({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["500","700"],
});

export const metadata: Metadata = {
  title: "Notion",
  description: "The connected workspace where better, faster work happens",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.png",
        href: "/logo-dark.png",
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font.className antialiased`}
      >
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            storageKey="notion-theme"
          >
          {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
