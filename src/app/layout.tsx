import { ApolloWrapper } from "@/lib/ApolloWrapper";
import Header from "@/components/Header";
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background">
        <ApolloWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow container max-w-7xl mx-auto px-4 py-8">
              {children}
              </main>
            </div>
          </ThemeProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
