import { ApolloWrapper } from "@/lib/ApolloWrapper";
import Header from "@/components/Header";
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0f1219]">
        <ApolloWrapper>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
          </div>
        </ApolloWrapper>
      </body>
    </html>
  );
}
