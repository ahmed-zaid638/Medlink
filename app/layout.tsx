import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import MainWrapper from "./components/layout/MainWrapper";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "MED Link",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <Toaster position="top-center" />
        <div>
          <Header />
          <MainWrapper>
            <AuthProvider>{children}</AuthProvider>
          </MainWrapper>
          <Footer />
        </div>
      </body>
    </html>
  );
}
