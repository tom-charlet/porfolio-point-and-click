import "./globals.css";
import { inter } from './fonts';
import { MemoryContextProvider } from '../context/Memory';
import { GlobalContextProvider } from '../context/Global';

export default function RootLayout({ children }) {
  return <html lang="fr">
    <body className={`${inter.variable}`}>
      <GlobalContextProvider>
        <MemoryContextProvider>
          <main className="h-screen w-screen overflow-hidden">
            {children}
          </main>
        </MemoryContextProvider>
      </GlobalContextProvider>
    </body>
  </html>
}

export const metadata = {
  title: "Porfolio Point and Click",
  description: "v1",
}