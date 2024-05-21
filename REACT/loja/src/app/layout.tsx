import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./components/BootstrapClient/BootstrapClient";
import Navbar from "./components/Navbar/Navbar";
import { ReactQueryClientProvider } from "./components/ReactQueryClient/ReactQueryClient";
import FavoritosProvider from "./components/FavoritosProvider/FavoritosProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WA Loja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryClientProvider>
          <FavoritosProvider>
            <Navbar />
            {children}
            <BootstrapClient />
          </FavoritosProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
