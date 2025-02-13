import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
})

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable}`}>
        <main className="h-screen w-screen overflow-hidden py-12 flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  )
}

export const metadata = {
  title: "Porfolio Point and Click",
  description: "v1",
}