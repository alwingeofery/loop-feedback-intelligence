import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { AppSessionProvider } from "@/providers/SessionProvider";
import { AppThemeProvider } from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "LOOP AI Customer Feedback Intelligence Platform",
  description: "Multi-tenant AI platform for customer feedback intelligence."
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppThemeProvider>
          <AppSessionProvider>{children}</AppSessionProvider>
        </AppThemeProvider>
      </body>
    </html>
  );
}
