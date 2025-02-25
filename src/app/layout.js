import { Inter } from "next/font/google";
import "./globals.css";
// import { ModalContextProvider } from '../context/Modal';

const inter = Inter({
  variable: "--font-inter",
})

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable}`}>
        {/* <ModalContextProvider> */}
          <main className="h-screen w-screen overflow-hidden">
            {children}
          </main>
        {/* </ModalContextProvider> */}
      </body>
    </html>
  )
}

export const metadata = {
  title: "Porfolio Point and Click",
  description: "v1",
}