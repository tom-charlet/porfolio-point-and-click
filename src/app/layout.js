import { Inter } from "next/font/google";
import "./globals.css";
import { OverlayContextProvider } from '../context/Overlay';
import { GlobalContextProvider } from '../context/Global';

const inter = Inter({
  variable: "--font-inter",
})

export default function RootLayout({ children }) {
  return <html lang="fr">
    <body className={`${inter.variable}`}>
      <GlobalContextProvider>
        <OverlayContextProvider>
          <main className="h-screen w-screen overflow-hidden">
            {children}
          </main>
        </OverlayContextProvider>
      </GlobalContextProvider>
    </body>
  </html>
}

export const metadata = {
  title: "Porfolio Point and Click",
  description: "v1",
}